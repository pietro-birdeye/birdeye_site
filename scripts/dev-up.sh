#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

echo "[dev-up] Killing existing dev processes (if any)"
pkill -f "pnpm --filter @clickeen/steve dev" 2>/dev/null || true
pkill -f "pnpm --filter @clickeen/devstudio dev" 2>/dev/null || true
pkill -f "pnpm --filter @birdeye/joni dev" 2>/dev/null || true

echo "[dev-up] Killing stale listeners on 4000,4173,5173 (if any)"
for p in 4000 4173 5173; do
  PIDS=$(lsof -ti tcp:$p -sTCP:LISTEN 2>/dev/null || true)
  if [ -n "$PIDS" ]; then
    echo "[dev-up] Killing $PIDS on port $p"
    kill -9 $PIDS || true
  fi
done

echo "[dev-up] Starting Steve (4000)"
PORT=4000 nohup pnpm --filter @clickeen/steve dev > CURRENTLY_EXECUTING/steve.dev.log 2>&1 &
STEVE_PID=$!
echo "[dev-up] Steve PID: $STEVE_PID"
for i in {1..15}; do
  if curl -sf "http://localhost:4000/healthz" >/dev/null; then break; fi
  sleep 0.5
done

export STEVE_URL=${STEVE_URL:-http://localhost:4000}
echo "[dev-up] Starting DevStudio (5173) with STEVE_URL=$STEVE_URL"
PORT=5173 STEVE_URL="$STEVE_URL" nohup pnpm --filter @clickeen/devstudio dev > CURRENTLY_EXECUTING/devstudio.dev.log 2>&1 &
DEVSTUDIO_PID=$!
echo "[dev-up] DevStudio PID: $DEVSTUDIO_PID"
for i in {1..15}; do
  if curl -sI "http://localhost:5173" >/dev/null 2>&1; then break; fi
  sleep 0.5
done

echo "[dev-up] Starting Joni (4173) with STEVE_URL=$STEVE_URL"
PORT=4173 VITE_STEVE_URL="$STEVE_URL" nohup pnpm --filter @birdeye/joni dev > CURRENTLY_EXECUTING/joni.dev.log 2>&1 &
JONI_PID=$!
echo "[dev-up] Joni PID: $JONI_PID"
for i in {1..15}; do
  if curl -sI "http://localhost:4173" >/dev/null 2>&1; then break; fi
  sleep 0.5
done

echo "[dev-up] URLs:"
echo "  Steve:    http://localhost:4000/healthz"
echo "  DevStudio: http://localhost:5173"
echo "  Joni:     http://localhost:4173"
