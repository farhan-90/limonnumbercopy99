// ==========================
// Limon Tools Script
// ==========================

const textarea = document.getElementById("numbers");

const total = document.getElementById("total");
const copied = document.getElementById("copied");
const remaining = document.getElementById("remaining");

const history = document.getElementById("history");

const fileInput = document.getElementById("fileInput");

let copiedCount = 0;

// --------------------------
// Update Counter
// --------------------------

function getNumbers(){

return textarea.value
.split(/\r?\n/)
.map(x=>x.trim())
.filter(x=>x!="");

}

function updateCounter(){

let list = getNumbers();

total.innerText = list.length + copiedCount;
copied.innerText = copiedCount;
remaining.innerText = list.length;

}

textarea.addEventListener("input",updateCounter);

// --------------------------
// Copy First Number
// --------------------------

document.getElementById("copyBtn").onclick = async ()=>{

let list = getNumbers();

if(list.length==0) return;

let num = list.shift();

if(!num.startsWith("+"))
num="+"+num;

await navigator.clipboard.writeText(num);

copiedCount++;

textarea.value=list.join("\n");

updateCounter();

let item=document.createElement("div");

item.innerText=num;

history.prepend(item);

};

// --------------------------
// All Clear
// --------------------------

document.getElementById("clearBtn").onclick=()=>{

textarea.value="";

copiedCount=0;

history.innerHTML="No copied numbers yet.";

updateCounter();

};

// --------------------------
// Clear History
// --------------------------

document.getElementById("clearHistory").onclick=()=>{

history.innerHTML="No copied numbers yet.";

};

// --------------------------
// Import TXT
// --------------------------

document.getElementById("importBtn").onclick=()=>{

fileInput.click();

};

fileInput.onchange=(e)=>{

const file=e.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(){

textarea.value=this.result;

updateCounter();

};

reader.readAsText(file);

};

// --------------------------
// Export TXT
// --------------------------

document.getElementById("exportBtn").onclick=()=>{

const blob=new Blob([textarea.value],{type:"text/plain"});

const a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="remaining_numbers.txt";

a.click();

};

// --------------------------
// Country Finder
// --------------------------

const countryCodes={

const countryCodes = {
"afghanistan":"AF",
"armenia":"AM",
"azerbaijan":"AZ",
"bahrain":"BH",
"bangladesh":"BD",
"bhutan":"BT",
"brunei":"BN",
"cambodia":"KH",
"china":"CN",
"cyprus":"CY",
"georgia":"GE",
"hong kong":"HK",
"india":"IN",
"indonesia":"ID",
"iran":"IR",
"iraq":"IQ",
"israel":"IL",
"japan":"JP",
"jordan":"JO",
"kazakhstan":"KZ",
"kuwait":"KW",
"kyrgyzstan":"KG",
"laos":"LA",
"lebanon":"LB",
"macao":"MO",
"malaysia":"MY",
"maldives":"MV",
"mongolia":"MN",
"myanmar":"MM",
"nepal":"NP",
"north korea":"KP",
"oman":"OM",
"pakistan":"PK",
"palestine":"PS",
"philippines":"PH",
"qatar":"QA",
"saudi arabia":"SA",
"singapore":"SG",
"south korea":"KR",
"sri lanka":"LK",
"syria":"SY",
"taiwan":"TW",
"tajikistan":"TJ",
"thailand":"TH",
"timor leste":"TL",
"turkey":"TR",
"turkmenistan":"TM",
"united arab emirates":"AE",
"uzbekistan":"UZ",
"vietnam":"VN",
"yemen":"YE",

"australia":"AU",
"fiji":"FJ",
"kiribati":"KI",
"marshall islands":"MH",
"micronesia":"FM",
"nauru":"NR",
"new zealand":"NZ",
"palau":"PW",
"papua new guinea":"PG",
"samoa":"WS",
"solomon islands":"SB",
"tonga":"TO",
"tuvalu":"TV",
"vanuatu":"VU"
,
"albania":"AL",
"andorra":"AD",
"austria":"AT",
"belarus":"BY",
"belgium":"BE",
"bosnia and herzegovina":"BA",
"bulgaria":"BG",
"croatia":"HR",
"czech republic":"CZ",
"denmark":"DK",
"estonia":"EE",
"finland":"FI",
"france":"FR",
"germany":"DE",
"greece":"GR",
"hungary":"HU",
"iceland":"IS",
"ireland":"IE",
"italy":"IT",
"kosovo":"XK",
"latvia":"LV",
"liechtenstein":"LI",
"lithuania":"LT",
"luxembourg":"LU",
"malta":"MT",
"moldova":"MD",
"monaco":"MC",
"montenegro":"ME",
"netherlands":"NL",
"north macedonia":"MK",
"norway":"NO",
"poland":"PL",
"portugal":"PT",
"romania":"RO",
"russia":"RU",
"san marino":"SM",
"serbia":"RS",
"slovakia":"SK",
"slovenia":"SI",
"spain":"ES",
"sweden":"SE",
"switzerland":"CH",
"ukraine":"UA",
"united kingdom":"GB",
"vatican city":"VA",

"algeria":"DZ",
"angola":"AO",
"benin":"BJ",
"botswana":"BW",
"burkina faso":"BF",
"burundi":"BI",
"cameroon":"CM",
"cape verde":"CV",
"central african republic":"CF",
"chad":"TD",
"comoros":"KM",
"democratic republic of the congo":"CD",
"republic of the congo":"CG",
"djibouti":"DJ",
"egypt":"EG",
"equatorial guinea":"GQ",
"eritrea":"ER",
"eswatini":"SZ",
"ethiopia":"ET",
"gabon":"GA",
"gambia":"GM",
"ghana":"GH",
"guinea":"GN",
"guinea-bissau":"GW",
"ivory coast":"CI",
"kenya":"KE",
"lesotho":"LS",
"liberia":"LR",
"libya":"LY",
"madagascar":"MG",
"malawi":"MW",
"mali":"ML",
"mauritania":"MR",
"mauritius":"MU",
"morocco":"MA",
"mozambique":"MZ",
"namibia":"NA",
"niger":"NE",
"nigeria":"NG",
"rwanda":"RW",
"senegal":"SN",
"seychelles":"SC",
"sierra leone":"SL",
"somalia":"SO",
"south africa":"ZA",
"south sudan":"SS",
"sudan":"SD",
"tanzania":"TZ",
"togo":"TG",
"tunisia":"TN",
"uganda":"UG",
"zambia":"ZM",
"zimbabwe":"ZW",

"antigua and barbuda":"AG",
"bahamas":"BS",
"barbados":"BB",
"belize":"BZ",
"canada":"CA",
"costa rica":"CR",
"cuba":"CU",
"dominica":"DM",
"dominican republic":"DO",
"el salvador":"SV",
"grenada":"GD",
"guatemala":"GT",
"haiti":"HT",
"honduras":"HN",
"jamaica":"JM",
"mexico":"MX",
"nicaragua":"NI",
"panama":"PA",
"saint kitts and nevis":"KN",
"saint lucia":"LC",
"saint vincent and the grenadines":"VC",
"trinidad and tobago":"TT",
"united states":"US",

"argentina":"AR",
"bolivia":"BO",
"brazil":"BR",
"chile":"CL",
"colombia":"CO",
"ecuador":"EC",
"guyana":"GY",
"paraguay":"PY",
"peru":"PE",
"suriname":"SR",
"uruguay":"UY",
"venezuela":"VE"
};

document.getElementById("countryBtn").onclick=()=>{

let name=document
.getElementById("countryInput")
.value
.trim()
.toLowerCase();

document.getElementById("countryResult").innerText=
countryCodes[name] || "Country Not Found";

};

updateCounter();
