const be_attribution_getDomain = (r) => {
    let k = '', keys = 'n/a', d = 'direct';

    function c(d, q) {
        const rx = new RegExp(d, 'gi');
        if (rx.test(r) === true) {
            k = r.search(new RegExp('[?&]' + q));
            if (k > 0) {
                k = r.slice(k).split(q + '=')[1];
                if (typeof (k) !== 'undefined' && k.indexOf('&') !== -1) {
                    return k.split('&')[0];
                } else {
                    return k;
                }
            }
        }
    }

    if (r !== '') {
        d = r.split('://')[1].split('/')[0];

        let fa = [ c('google', 'q'), c('search', 'q'), c('yahoo', 'p'),
            c('msn', 'q'), c('bing', 'q'), c('aol', 'query'),
            c('aol', 'encquery'), c('lycos', 'query'), c('ask', 'q'),
            c('altavista', 'q'), c('netscape', 'query'),
            c('cnn', 'query'), c('looksmart', 'qt'),
            c('about', 'terms'), c('mamma', 'query'),
            c('alltheweb', 'q'), c('gigablast', 'q'),
            c('voila', 'rdata'), c('virgilio', 'qs'), c('live', 'q'),
            c('baidu', 'wd'), c('alice', 'qs'), c('yandex', 'text'),
            c('najdi', 'q'), c('aol', 'q'),
            c('club-internet', 'query'), c('mama', 'query'),
            c('seznam', 'q'), c('wp', 'szukaj'), c('onet', 'qt'),
            c('netsprint', 'q'), c('google.interia', 'q'),
            c('szukacz', 'q'), c('yam', 'k'), c('pchome', 'q'),
            c('kvasir', 'searchExpr'), c('sesam', 'q'), c('ozu', 'q'),
            c('terra', 'query'), c('nostrum', 'query'),
            c('mynet', 'q'), c('ekolay', 'q'),
            c('search.ilse', 'search_for'), c('myway', 'searchfor') ];
        keys = (typeof (fa.sort()[0]) !== 'undefined') ? encodeURIComponent(fa.sort()[0]) : '';
    }

    return {
        'domain' : d,
        'kw' : keys
    };
};

const be_attribution_stripHTMLTags = (userInput) => {
    if (!userInput || (typeof userInput !== 'string')) return '';
    return userInput.replace(/<\/?[^>]+(>|$)/g, '');
};

const be_attribution_getParameterByName = (name, url=window.location.href) => {
    name = name.replace(/[[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    let finalValue = be_attribution_stripHTMLTags(decodeURIComponent(results[2].replace(/\+/g, ' ')));
    if (!finalValue || finalValue === 'null') return null;
    else return finalValue; 
};

const be_attribution_getAdClickId = ({ attributionCookies }) => {
    let adClickId = null;
    if (be_attribution_getParameterByName('gclid')) {
        adClickId = 'gclid=' + be_attribution_getParameterByName('gclid');
    } else if (be_attribution_getParameterByName('fbclid')) {
        adClickId = 'fbclid=' + be_attribution_getParameterByName('fbclid');
    } else if (be_attribution_getParameterByName('msclkid')) {
        adClickId = 'msclkid=' + be_attribution_getParameterByName('msclkid');
    } else if (attributionCookies.adClickId) {
        adClickId = attributionCookies.adClickId;
    }
    return adClickId;
};

const be_attribution_getDateFromDay = (day) => {
    const today = new Date();
    return new Date(new Date().setDate(today.getDate() + parseInt(day)));
};

const be_attribution_setCookie = (name, value, expiry) => {
    try {
        let expires = expiry.toUTCString();
        let domain = '.birdeye.com';
        if (location.hostname.includes('getbirdeye')) domain = '.getbirdeye.com.au';
        if (location.hostname.includes('localhost')) domain = 'localhost';
        // Only set Secure flag if not localhost
        let secureFlag = domain !== 'localhost' ? '; Secure' : '';
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; domain=${domain}${secureFlag}`;
    } catch (error) {
        console.error(`Error while setting cookie ${name}`, error);
    }
};

const be_attribution_getCookies = () => {
    const TRACKING_PARAMETERS = [ 'leadMedium', 'leadContent', 'leadCampaign', 'leadSubCampaign', 'leadCampaignKW', 'experiments', 'leadSfdcCampaign', 'adClickId', 'leadClickUrl', 'clickPageType', 'bid', 'attributionSet' ];
    let cookies = {};
    let cookieStrings = document.cookie.split(';');
    cookieStrings.forEach(function(cookieString) {
        let parts = cookieString.split('=');
        let key = parts[0].trim();
        let value = decodeURIComponent(parts.slice(1).join('=').trim()); // Join back in case the value contains '='
        if (TRACKING_PARAMETERS.includes(key) && value && value !== 'null') { cookies[key] = value; }
    });
    return cookies;
}

const be_attribution_saveLeadGenDataInLocalStorage = () => {
    const arrWidgetType = ['old-rectangle', 'round', 'scrolling-feed', 'facebook', 'mini-rectangle', 'square', 'rectangle', 'rotating-feed', 'mess'];
    
    let defaultSubCampaign = document.querySelector('meta[name="be-tracking-source"]') ? document.querySelector('meta[name="be-tracking-source"]').getAttribute('content') : 'default_website';
    if (window.location.pathname.match(/(\/resources\/|\/press\/\|\/blog\/)/)) defaultSubCampaign = 'content';
    
    let leadCampaign = 'direct';
    let leadSubCampaign = defaultSubCampaign;
    let leadCampaignKW = 'n/a';
    let businessNumber = '';
    let adClickId = '';
    let leadSfdcCampaign = '';
    let leadExperiments = '';
    let leadMedium = '(none)';
    let leadContent = '';
    let isProductEmailCampaign = false;
    const seoCampaignHostRegex = /(google|bing|yahoo|duckduckgo|ask|aol|baidu|myway|yandex|ecosia|chatgpt|gemini|copilot|perplexity|claude\.ai)/i;
    const seoLeadSubCampaign = defaultSubCampaign;
    const birdeyeSites = ['birdeye.com', 'reviews.birdeye.com', 'getbirdeye.com.au'];

    const seoObj = be_attribution_getDomain(document.referrer);
    const isSEOCampaign = seoObj.domain.match(/(google|bing|yahoo|duckduckgo|ask\.com|aol\.com|baidu\.com|search\.myway\.com|yandex|ecosia|chatgpt|gemini|copilot|perplexity|claude\.ai)/i);
    const isWidgetCampaign = document.referrer.match(/\/reviews\//) && !document.referrer.match(/\/dashboard\/reviews\//) && !document.referrer.indexOf('birdeye.com/reviews') > 0;
    const isOrganicCampaign = seoObj.domain.match(/(g2crowd\.com|g2\.com|getapp\.com|softwareadvice\.com|capterra\.com|sourceforge\.net|trustpilot\.com|featuredcustomers\.com|financesonline\.com|crozdesk\.com|trustradius\.com|softwarereviews\.com|bbb\.org|softwarepundit\.com|goodfirms\.co|comparecamp\.com|softwaresuggest\.com|alternativeto\.net|softwareworld\.co|serchen\.com|saasworthy\.com|saashub\.com)/);
    const isBdlead = seoObj.domain.match(/(athenahealth|carestreamdental|clio|cloud9\.software|clover|curvedental|homelight|keap|lightspeedhq|mindbodyonline|modernizingmedicine|agentbox|nextech|quickbooks\.intuit|servicetitan|sitelink|zendesk|em\.console|link\.edgepilot|rentmanager|dentrix|pattersondental|planetdds|opendental|eclinicalworks|nextgen|drchrono|search\.brave|advancedmd|allscripts|jobnimbus|practicefusion|realpage|storelocal|yardi|storable|appfolio|mrisoftware|icemortgagetechnology|cdkglobal|fortellis|henryschein|olo|covetrus|housecallpro|dealersocket|gosensei|followupboss|practicepanther|partnerfleet|flockler|smokeball|selfstoragemanager|equinoxfinancing|customerexperienceupdate|fiverr|guru99|dealervault|authenticom)/);
    const isFromSocialMedia = seoObj.domain.match(/(facebook|linkedin|twitter|youtube|instagram|quora)/);

    
    let attributionCookies = be_attribution_getCookies();
    let attributionOverride = 1;
    // "attributionLessThan24Hrs" tells us if the attribution values were set less than 24 hours ago
    // We are assuming that all the attributions are overlapped if leadCampaign is overlapped
    const attributionLessThan24Hrs = (attributionCookies.attributionSet && !isNaN(new Date(attributionCookies.attributionSet).getTime())) ? ((new Date() - new Date(attributionCookies.attributionSet))/ (1000 * 60 * 60) < 24) : false;

    if (be_attribution_getParameterByName('utm_source') && be_attribution_getParameterByName('utm_source') !== 'chatgpt.com') {
        leadCampaign = be_attribution_getParameterByName('utm_source').trim();
    } else if (be_attribution_getParameterByName('lead_campaign')) {
        leadCampaign = be_attribution_getParameterByName('lead_campaign').trim();
    } else if (isWidgetCampaign) {
        leadCampaign = 'widget';
    } else if (attributionCookies.leadCampaign && attributionLessThan24Hrs) {
        attributionOverride = 0; // No need to override "attributionSet" cookie
        leadCampaign = attributionCookies.leadCampaign;
        // fallback will come in effect if user escapes till here
    } else if (isSEOCampaign) {
        leadCampaign = 'seo';
    } else if(isOrganicCampaign) {
        leadCampaign = isOrganicCampaign[0].split('.')[0];
        if(leadCampaign == 'g2') {
            leadCampaign = 'g2crowd';
        }
    } else if(isBdlead) {
        leadCampaign = 'bdlead';
    } else if (isFromSocialMedia){
        leadCampaign = isFromSocialMedia[0];
    } else if (attributionCookies.leadCampaign && attributionCookies.leadCampaign !== 'direct') {
        leadCampaign = attributionCookies.leadCampaign;
    } else if (document.referrer !== '') {
        leadCampaign = seoObj.domain;
    }

    if(leadCampaign === 'product_email') {
        isProductEmailCampaign = true;
    }

    if (be_attribution_getParameterByName('utm_campaign')) {
        leadSubCampaign = be_attribution_getParameterByName('utm_campaign');
    } else if (be_attribution_getParameterByName('lead_sub_campaign')) {
        leadSubCampaign = be_attribution_getParameterByName('lead_sub_campaign');
    } else if (isWidgetCampaign) {
        const widgetNo = (document.referrer.match(/\/reviews\/(.*?)\?/)[1]) ? document.referrer.match(/\/reviews\/(.*?)\?/)[1] : 9;
        leadSubCampaign = arrWidgetType[parseInt(widgetNo) + 1];
    } else if (attributionCookies.leadSubCampaign && attributionLessThan24Hrs) {
        leadSubCampaign = attributionCookies.leadSubCampaign;
    } else if (isSEOCampaign) {
        leadSubCampaign = seoLeadSubCampaign;
    } else if (isBdlead) {
        leadSubCampaign ='integration_partner';
    } else if (attributionCookies.leadSubCampaign && attributionCookies.leadCampaign !== 'direct') {
        leadSubCampaign = attributionCookies.leadSubCampaign;
    } else if (document.referrer !== '') {
        leadSubCampaign = seoLeadSubCampaign;
    }

    if (be_attribution_getParameterByName('utm_term')) {
        leadCampaignKW = be_attribution_getParameterByName('utm_term');
    } else if (be_attribution_getParameterByName('lead_campaign_kw')) {
        leadCampaignKW = be_attribution_getParameterByName('lead_campaign_kw');
    } else if (attributionCookies.leadCampaignKW && attributionLessThan24Hrs) {
        leadCampaignKW = attributionCookies.leadCampaignKW;
    }  else if (isWidgetCampaign) {
        leadCampaignKW = document.referrer;
    } else if (isBdlead) {
        leadCampaignKW = isBdlead[0];
    } else if (attributionCookies.leadCampaignKW && attributionCookies.leadCampaign !== 'direct') {
        leadCampaignKW = attributionCookies.leadCampaignKW;
    } else {
        leadCampaignKW = seoObj.kw;
    }

    adClickId = be_attribution_getAdClickId({ attributionCookies });

    if (be_attribution_getParameterByName('bid')) {
        businessNumber = be_attribution_getParameterByName('bid');
    } else if (attributionCookies.bid) {
        businessNumber = attributionCookies.bid;
    }

    if (be_attribution_getParameterByName('utm_sfcamp')) {
        leadSfdcCampaign = be_attribution_getParameterByName('utm_sfcamp');
    } else if (isBdlead) {
        leadSfdcCampaign = '7015b000005IAroAAG';
    }

    if (attributionCookies.experiments) {
        leadExperiments = attributionCookies.experiments;
    }

    if (be_attribution_getParameterByName('experiments')) {
        let experimentName = be_attribution_getParameterByName('experiments');
        if (leadExperiments.length) {
            let arr = leadExperiments.split(',');
            if (arr.indexOf(experimentName) < 0) {
                arr.push(experimentName);
            }
            leadExperiments = arr.join(',');
        } else {
            leadExperiments = experimentName;
        }
    }


    if (be_attribution_getParameterByName('utm_medium')) {
        attributionOverride = 1;
        leadMedium = be_attribution_getParameterByName('utm_medium');
    } else if (attributionCookies.leadMedium && attributionLessThan24Hrs) {
        attributionOverride = 0;
        leadMedium = attributionCookies.leadMedium;
    } else if (isOrganicCampaign || isSEOCampaign || isFromSocialMedia) {
        attributionOverride = 1;
        leadMedium = 'organic';
    } else if (isBdlead) {
        attributionOverride = 1;
        leadMedium = 'bdlead';
    } else if (attributionCookies.leadMedium && attributionCookies.leadCampaign !== 'direct') {
        attributionOverride = 1;
        leadMedium = attributionCookies.leadMedium;
    } else if (document.referrer !== '') {
        attributionOverride = 1;
        leadMedium = 'referral';
    }


    // Manage utm_content
    if (be_attribution_getParameterByName('utm_content')) {
        leadContent = be_attribution_getParameterByName('utm_content');
    } else if (attributionCookies.leadContent && attributionLessThan24Hrs) {
        leadContent = attributionCookies.leadContent;
    } else if (isSEOCampaign) {
        leadContent = seoObj.domain.split('.').filter(h => h.match(seoCampaignHostRegex))[0];
    } else if (isBdlead) {
        leadContent = seoObj.domain;
    } else if (attributionCookies.leadContent && attributionCookies.leadCampaign !== 'direct') {
        leadContent = attributionCookies.leadContent;
    }

    // Override attribution when leadCampaign == Direct
    // Below code is a fallback for edge case if user comes with 'direct' 
    // and then before 24 hours are completed visits again with another channel.
    // This is to minimize the cases of 'direct' by overriding it with applicable channel.
    if (attributionCookies.leadCampaign && leadCampaign == 'direct') {
        if (isSEOCampaign) {
            attributionOverride = 1;
            leadCampaign = 'seo';
            leadSubCampaign = seoLeadSubCampaign;
            leadMedium = 'organic';
            leadContent = seoObj.domain.split('.').filter(h => h.match(seoCampaignHostRegex))[0];
            leadCampaignKW = seoObj.kw;
        } else if (isOrganicCampaign) {
            attributionOverride = 1;
            leadCampaign = isOrganicCampaign[0].split('.')[0];
            if(leadCampaign == 'g2') {
                leadCampaign = 'g2crowd';
            }
            leadSubCampaign = defaultSubCampaign;
            leadMedium = 'organic';
            leadContent = '';
            leadCampaignKW = seoObj.kw;
        } else if (isBdlead) {
            attributionOverride = 1;
            leadCampaign = 'bdlead';
            leadSubCampaign ='integration_partner';
            leadCampaignKW = isBdlead[0];
            leadSfdcCampaign = '7015b000005IAroAAG';
            leadMedium = 'bdlead';
            leadContent = seoObj.domain;
        } else if (isFromSocialMedia){
            attributionOverride = 1;
            leadSubCampaign = defaultSubCampaign;
            leadCampaign = isFromSocialMedia[0];
            leadMedium = 'organic';
            leadContent = '';
            leadCampaignKW = seoObj.kw;
        } else if (document.referrer !== '' && !birdeyeSites.includes(seoObj.domain)) {
            attributionOverride = 1;
            leadCampaign = seoObj.domain;
            leadSubCampaign = seoLeadSubCampaign;
            leadMedium = 'referral';
            leadContent = '';
            leadCampaignKW = seoObj.kw;
        }
    }
    if(isBdlead && !['cpc','bdlead'].includes(leadMedium)){
        attributionOverride = 1;
        leadCampaign = 'bdlead';
        leadSubCampaign ='integration_partner';
        leadMedium = 'bdlead';
        leadContent = seoObj.domain;
        leadSfdcCampaign = '7015b000005IAroAAG';
        leadCampaignKW = isBdlead[0];
    }


    // Product Email
    if(isProductEmailCampaign) {
        if (leadMedium !== 'email') {
            leadContent = leadMedium;
        }
        attributionOverride = 1;
        leadMedium = 'email';
    }

    if (attributionOverride) { // This cookie will record the time when atrributions were set
        be_attribution_setCookie('attributionSet', new Date().toISOString(), be_attribution_getDateFromDay(30));
    }

    if (leadMedium) {
        be_attribution_setCookie('leadMedium', leadMedium, be_attribution_getDateFromDay(30));
    }

    if (leadContent) {
        be_attribution_setCookie('leadContent', leadContent, be_attribution_getDateFromDay(30));
    }

    if (leadCampaign) {
        be_attribution_setCookie('leadCampaign', leadCampaign, be_attribution_getDateFromDay(30));
    }

    if (leadSubCampaign) {
        be_attribution_setCookie('leadSubCampaign', leadSubCampaign, be_attribution_getDateFromDay(30));
    }

    if (leadCampaignKW) {
        be_attribution_setCookie('leadCampaignKW', leadCampaignKW, be_attribution_getDateFromDay(30));
    }

    if (leadExperiments) {
        be_attribution_setCookie('experiments', leadExperiments, be_attribution_getDateFromDay(1));
    }

    if (leadSfdcCampaign && leadSfdcCampaign.length) {
        be_attribution_setCookie('leadSfdcCampaign', leadSfdcCampaign, be_attribution_getDateFromDay(30));
    }

    if (adClickId) {
        be_attribution_setCookie('adClickId', adClickId, be_attribution_getDateFromDay(1));
    }

    if (businessNumber) {
        be_attribution_setCookie('bid', businessNumber, be_attribution_getDateFromDay(1));
    }

    if (!attributionCookies.leadClickUrl && 'location' in window) {
        be_attribution_setCookie('leadClickUrl', window?.location?.href, be_attribution_getDateFromDay(1));
        be_attribution_setCookie('clickPageType', window?.dataLayer?.filter((o)=>o.contentType)[0]?.contentType || null, be_attribution_getDateFromDay(1));
    }

    if (be_attribution_getParameterByName('utm_oid')) {
        sessionStorage.setItem('leadOwner', be_attribution_getParameterByName('utm_oid'));
    }
};

const be_execute_attributionManager = () => {
try {
    be_attribution_saveLeadGenDataInLocalStorage();
} catch (error) {
    console.error(`Error while setting attibution cookies. Cookies - (${document.cookie}).`, error);
}
}

be_execute_attributionManager();