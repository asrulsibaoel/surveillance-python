$(document).ready(function () {

    //Map with Bubbles

    var latlong = {};
    latlong["AD"] = {"latitude": 42.5, "longitude": 1.5};
    latlong["AE"] = {"latitude": 24, "longitude": 54};
    latlong["AF"] = {"latitude": 33, "longitude": 65};
    latlong["AG"] = {"latitude": 17.05, "longitude": -61.8};
    latlong["AI"] = {"latitude": 18.25, "longitude": -63.1667};
    latlong["AL"] = {"latitude": 41, "longitude": 20};
    latlong["AM"] = {"latitude": 40, "longitude": 45};
    latlong["AN"] = {"latitude": 12.25, "longitude": -68.75};
    latlong["AO"] = {"latitude": -12.5, "longitude": 18.5};
    latlong["AP"] = {"latitude": 35, "longitude": 105};
    latlong["AQ"] = {"latitude": -90, "longitude": 0};
    latlong["AR"] = {"latitude": -34, "longitude": -64};
    latlong["AS"] = {"latitude": -14.3333, "longitude": -170};
    latlong["AT"] = {"latitude": 47.3333, "longitude": 13.3333};
    latlong["AU"] = {"latitude": -27, "longitude": 133};
    latlong["AW"] = {"latitude": 12.5, "longitude": -69.9667};
    latlong["AZ"] = {"latitude": 40.5, "longitude": 47.5};
    latlong["BA"] = {"latitude": 44, "longitude": 18};
    latlong["BB"] = {"latitude": 13.1667, "longitude": -59.5333};
    latlong["BD"] = {"latitude": 24, "longitude": 90};
    latlong["BE"] = {"latitude": 50.8333, "longitude": 4};
    latlong["BF"] = {"latitude": 13, "longitude": -2};
    latlong["BG"] = {"latitude": 43, "longitude": 25};
    latlong["BH"] = {"latitude": 26, "longitude": 50.55};
    latlong["BI"] = {"latitude": -3.5, "longitude": 30};
    latlong["BJ"] = {"latitude": 9.5, "longitude": 2.25};
    latlong["BM"] = {"latitude": 32.3333, "longitude": -64.75};
    latlong["BN"] = {"latitude": 4.5, "longitude": 114.6667};
    latlong["BO"] = {"latitude": -17, "longitude": -65};
    latlong["BR"] = {"latitude": -10, "longitude": -55};
    latlong["BS"] = {"latitude": 24.25, "longitude": -76};
    latlong["BT"] = {"latitude": 27.5, "longitude": 90.5};
    latlong["BV"] = {"latitude": -54.4333, "longitude": 3.4};
    latlong["BW"] = {"latitude": -22, "longitude": 24};
    latlong["BY"] = {"latitude": 53, "longitude": 28};
    latlong["BZ"] = {"latitude": 17.25, "longitude": -88.75};
    latlong["CA"] = {"latitude": 54, "longitude": -100};
    latlong["CC"] = {"latitude": -12.5, "longitude": 96.8333};
    latlong["CD"] = {"latitude": 0, "longitude": 25};
    latlong["CF"] = {"latitude": 7, "longitude": 21};
    latlong["CG"] = {"latitude": -1, "longitude": 15};
    latlong["CH"] = {"latitude": 47, "longitude": 8};
    latlong["CI"] = {"latitude": 8, "longitude": -5};
    latlong["CK"] = {"latitude": -21.2333, "longitude": -159.7667};
    latlong["CL"] = {"latitude": -30, "longitude": -71};
    latlong["CM"] = {"latitude": 6, "longitude": 12};
    latlong["CN"] = {"latitude": 35, "longitude": 105};
    latlong["CO"] = {"latitude": 4, "longitude": -72};
    latlong["CR"] = {"latitude": 10, "longitude": -84};
    latlong["CU"] = {"latitude": 21.5, "longitude": -80};
    latlong["CV"] = {"latitude": 16, "longitude": -24};
    latlong["CX"] = {"latitude": -10.5, "longitude": 105.6667};
    latlong["CY"] = {"latitude": 35, "longitude": 33};
    latlong["CZ"] = {"latitude": 49.75, "longitude": 15.5};
    latlong["DE"] = {"latitude": 51, "longitude": 9};
    latlong["DJ"] = {"latitude": 11.5, "longitude": 43};
    latlong["DK"] = {"latitude": 56, "longitude": 10};
    latlong["DM"] = {"latitude": 15.4167, "longitude": -61.3333};
    latlong["DO"] = {"latitude": 19, "longitude": -70.6667};
    latlong["DZ"] = {"latitude": 28, "longitude": 3};
    latlong["EC"] = {"latitude": -2, "longitude": -77.5};
    latlong["EE"] = {"latitude": 59, "longitude": 26};
    latlong["EG"] = {"latitude": 27, "longitude": 30};
    latlong["EH"] = {"latitude": 24.5, "longitude": -13};
    latlong["ER"] = {"latitude": 15, "longitude": 39};
    latlong["ES"] = {"latitude": 40, "longitude": -4};
    latlong["ET"] = {"latitude": 8, "longitude": 38};
    latlong["EU"] = {"latitude": 47, "longitude": 8};
    latlong["FI"] = {"latitude": 62, "longitude": 26};
    latlong["FJ"] = {"latitude": -18, "longitude": 175};
    latlong["FK"] = {"latitude": -51.75, "longitude": -59};
    latlong["FM"] = {"latitude": 6.9167, "longitude": 158.25};
    latlong["FO"] = {"latitude": 62, "longitude": -7};
    latlong["FR"] = {"latitude": 46, "longitude": 2};
    latlong["GA"] = {"latitude": -1, "longitude": 11.75};
    latlong["GB"] = {"latitude": 54, "longitude": -2};
    latlong["GD"] = {"latitude": 12.1167, "longitude": -61.6667};
    latlong["GE"] = {"latitude": 42, "longitude": 43.5};
    latlong["GF"] = {"latitude": 4, "longitude": -53};
    latlong["GH"] = {"latitude": 8, "longitude": -2};
    latlong["GI"] = {"latitude": 36.1833, "longitude": -5.3667};
    latlong["GL"] = {"latitude": 72, "longitude": -40};
    latlong["GM"] = {"latitude": 13.4667, "longitude": -16.5667};
    latlong["GN"] = {"latitude": 11, "longitude": -10};
    latlong["GP"] = {"latitude": 16.25, "longitude": -61.5833};
    latlong["GQ"] = {"latitude": 2, "longitude": 10};
    latlong["GR"] = {"latitude": 39, "longitude": 22};
    latlong["GS"] = {"latitude": -54.5, "longitude": -37};
    latlong["GT"] = {"latitude": 15.5, "longitude": -90.25};
    latlong["GU"] = {"latitude": 13.4667, "longitude": 144.7833};
    latlong["GW"] = {"latitude": 12, "longitude": -15};
    latlong["GY"] = {"latitude": 5, "longitude": -59};
    latlong["HK"] = {"latitude": 22.25, "longitude": 114.1667};
    latlong["HM"] = {"latitude": -53.1, "longitude": 72.5167};
    latlong["HN"] = {"latitude": 15, "longitude": -86.5};
    latlong["HR"] = {"latitude": 45.1667, "longitude": 15.5};
    latlong["HT"] = {"latitude": 19, "longitude": -72.4167};
    latlong["HU"] = {"latitude": 47, "longitude": 20};
    latlong["ID"] = {"latitude": -5, "longitude": 120};
    latlong["IE"] = {"latitude": 53, "longitude": -8};
    latlong["IL"] = {"latitude": 31.5, "longitude": 34.75};
    latlong["IN"] = {"latitude": 20, "longitude": 77};
    latlong["IO"] = {"latitude": -6, "longitude": 71.5};
    latlong["IQ"] = {"latitude": 33, "longitude": 44};
    latlong["IR"] = {"latitude": 32, "longitude": 53};
    latlong["IS"] = {"latitude": 65, "longitude": -18};
    latlong["IT"] = {"latitude": 42.8333, "longitude": 12.8333};
    latlong["JM"] = {"latitude": 18.25, "longitude": -77.5};
    latlong["JO"] = {"latitude": 31, "longitude": 36};
    latlong["JP"] = {"latitude": 36, "longitude": 138};
    latlong["KE"] = {"latitude": 1, "longitude": 38};
    latlong["KG"] = {"latitude": 41, "longitude": 75};
    latlong["KH"] = {"latitude": 13, "longitude": 105};
    latlong["KI"] = {"latitude": 1.4167, "longitude": 173};
    latlong["KM"] = {"latitude": -12.1667, "longitude": 44.25};
    latlong["KN"] = {"latitude": 17.3333, "longitude": -62.75};
    latlong["KP"] = {"latitude": 40, "longitude": 127};
    latlong["KR"] = {"latitude": 37, "longitude": 127.5};
    latlong["KW"] = {"latitude": 29.3375, "longitude": 47.6581};
    latlong["KY"] = {"latitude": 19.5, "longitude": -80.5};
    latlong["KZ"] = {"latitude": 48, "longitude": 68};
    latlong["LA"] = {"latitude": 18, "longitude": 105};
    latlong["LB"] = {"latitude": 33.8333, "longitude": 35.8333};
    latlong["LC"] = {"latitude": 13.8833, "longitude": -61.1333};
    latlong["LI"] = {"latitude": 47.1667, "longitude": 9.5333};
    latlong["LK"] = {"latitude": 7, "longitude": 81};
    latlong["LR"] = {"latitude": 6.5, "longitude": -9.5};
    latlong["LS"] = {"latitude": -29.5, "longitude": 28.5};
    latlong["LT"] = {"latitude": 55, "longitude": 24};
    latlong["LU"] = {"latitude": 49.75, "longitude": 6};
    latlong["LV"] = {"latitude": 57, "longitude": 25};
    latlong["LY"] = {"latitude": 25, "longitude": 17};
    latlong["MA"] = {"latitude": 32, "longitude": -5};
    latlong["MC"] = {"latitude": 43.7333, "longitude": 7.4};
    latlong["MD"] = {"latitude": 47, "longitude": 29};
    latlong["ME"] = {"latitude": 42.5, "longitude": 19.4};
    latlong["MG"] = {"latitude": -20, "longitude": 47};
    latlong["MH"] = {"latitude": 9, "longitude": 168};
    latlong["MK"] = {"latitude": 41.8333, "longitude": 22};
    latlong["ML"] = {"latitude": 17, "longitude": -4};
    latlong["MM"] = {"latitude": 22, "longitude": 98};
    latlong["MN"] = {"latitude": 46, "longitude": 105};
    latlong["MO"] = {"latitude": 22.1667, "longitude": 113.55};
    latlong["MP"] = {"latitude": 15.2, "longitude": 145.75};
    latlong["MQ"] = {"latitude": 14.6667, "longitude": -61};
    latlong["MR"] = {"latitude": 20, "longitude": -12};
    latlong["MS"] = {"latitude": 16.75, "longitude": -62.2};
    latlong["MT"] = {"latitude": 35.8333, "longitude": 14.5833};
    latlong["MU"] = {"latitude": -20.2833, "longitude": 57.55};
    latlong["MV"] = {"latitude": 3.25, "longitude": 73};
    latlong["MW"] = {"latitude": -13.5, "longitude": 34};
    latlong["MX"] = {"latitude": 23, "longitude": -102};
    latlong["MY"] = {"latitude": 2.5, "longitude": 112.5};
    latlong["MZ"] = {"latitude": -18.25, "longitude": 35};
    latlong["NA"] = {"latitude": -22, "longitude": 17};
    latlong["NC"] = {"latitude": -21.5, "longitude": 165.5};
    latlong["NE"] = {"latitude": 16, "longitude": 8};
    latlong["NF"] = {"latitude": -29.0333, "longitude": 167.95};
    latlong["NG"] = {"latitude": 10, "longitude": 8};
    latlong["NI"] = {"latitude": 13, "longitude": -85};
    latlong["NL"] = {"latitude": 52.5, "longitude": 5.75};
    latlong["NO"] = {"latitude": 62, "longitude": 10};
    latlong["NP"] = {"latitude": 28, "longitude": 84};
    latlong["NR"] = {"latitude": -0.5333, "longitude": 166.9167};
    latlong["NU"] = {"latitude": -19.0333, "longitude": -169.8667};
    latlong["NZ"] = {"latitude": -41, "longitude": 174};
    latlong["OM"] = {"latitude": 21, "longitude": 57};
    latlong["PA"] = {"latitude": 9, "longitude": -80};
    latlong["PE"] = {"latitude": -10, "longitude": -76};
    latlong["PF"] = {"latitude": -15, "longitude": -140};
    latlong["PG"] = {"latitude": -6, "longitude": 147};
    latlong["PH"] = {"latitude": 13, "longitude": 122};
    latlong["PK"] = {"latitude": 30, "longitude": 70};
    latlong["PL"] = {"latitude": 52, "longitude": 20};
    latlong["PM"] = {"latitude": 46.8333, "longitude": -56.3333};
    latlong["PR"] = {"latitude": 18.25, "longitude": -66.5};
    latlong["PS"] = {"latitude": 32, "longitude": 35.25};
    latlong["PT"] = {"latitude": 39.5, "longitude": -8};
    latlong["PW"] = {"latitude": 7.5, "longitude": 134.5};
    latlong["PY"] = {"latitude": -23, "longitude": -58};
    latlong["QA"] = {"latitude": 25.5, "longitude": 51.25};
    latlong["RE"] = {"latitude": -21.1, "longitude": 55.6};
    latlong["RO"] = {"latitude": 46, "longitude": 25};
    latlong["RS"] = {"latitude": 44, "longitude": 21};
    latlong["RU"] = {"latitude": 60, "longitude": 100};
    latlong["RW"] = {"latitude": -2, "longitude": 30};
    latlong["SA"] = {"latitude": 25, "longitude": 45};
    latlong["SB"] = {"latitude": -8, "longitude": 159};
    latlong["SC"] = {"latitude": -4.5833, "longitude": 55.6667};
    latlong["SD"] = {"latitude": 15, "longitude": 30};
    latlong["SE"] = {"latitude": 62, "longitude": 15};
    latlong["SG"] = {"latitude": 1.3667, "longitude": 103.8};
    latlong["SH"] = {"latitude": -15.9333, "longitude": -5.7};
    latlong["SI"] = {"latitude": 46, "longitude": 15};
    latlong["SJ"] = {"latitude": 78, "longitude": 20};
    latlong["SK"] = {"latitude": 48.6667, "longitude": 19.5};
    latlong["SL"] = {"latitude": 8.5, "longitude": -11.5};
    latlong["SM"] = {"latitude": 43.7667, "longitude": 12.4167};
    latlong["SN"] = {"latitude": 14, "longitude": -14};
    latlong["SO"] = {"latitude": 10, "longitude": 49};
    latlong["SR"] = {"latitude": 4, "longitude": -56};
    latlong["ST"] = {"latitude": 1, "longitude": 7};
    latlong["SV"] = {"latitude": 13.8333, "longitude": -88.9167};
    latlong["SY"] = {"latitude": 35, "longitude": 38};
    latlong["SZ"] = {"latitude": -26.5, "longitude": 31.5};
    latlong["TC"] = {"latitude": 21.75, "longitude": -71.5833};
    latlong["TD"] = {"latitude": 15, "longitude": 19};
    latlong["TF"] = {"latitude": -43, "longitude": 67};
    latlong["TG"] = {"latitude": 8, "longitude": 1.1667};
    latlong["TH"] = {"latitude": 15, "longitude": 100};
    latlong["TJ"] = {"latitude": 39, "longitude": 71};
    latlong["TK"] = {"latitude": -9, "longitude": -172};
    latlong["TM"] = {"latitude": 40, "longitude": 60};
    latlong["TN"] = {"latitude": 34, "longitude": 9};
    latlong["TO"] = {"latitude": -20, "longitude": -175};
    latlong["TR"] = {"latitude": 39, "longitude": 35};
    latlong["TT"] = {"latitude": 11, "longitude": -61};
    latlong["TV"] = {"latitude": -8, "longitude": 178};
    latlong["TW"] = {"latitude": 23.5, "longitude": 121};
    latlong["TZ"] = {"latitude": -6, "longitude": 35};
    latlong["UA"] = {"latitude": 49, "longitude": 32};
    latlong["UG"] = {"latitude": 1, "longitude": 32};
    latlong["UM"] = {"latitude": 19.2833, "longitude": 166.6};
    latlong["US"] = {"latitude": 38, "longitude": -97};
    latlong["UY"] = {"latitude": -33, "longitude": -56};
    latlong["UZ"] = {"latitude": 41, "longitude": 64};
    latlong["VA"] = {"latitude": 41.9, "longitude": 12.45};
    latlong["VC"] = {"latitude": 13.25, "longitude": -61.2};
    latlong["VE"] = {"latitude": 8, "longitude": -66};
    latlong["VG"] = {"latitude": 18.5, "longitude": -64.5};
    latlong["VI"] = {"latitude": 18.3333, "longitude": -64.8333};
    latlong["VN"] = {"latitude": 16, "longitude": 106};
    latlong["VU"] = {"latitude": -16, "longitude": 167};
    latlong["WF"] = {"latitude": -13.3, "longitude": -176.2};
    latlong["WS"] = {"latitude": -13.5833, "longitude": -172.3333};
    latlong["YE"] = {"latitude": 15, "longitude": 48};
    latlong["YT"] = {"latitude": -12.8333, "longitude": 45.1667};
    latlong["ZA"] = {"latitude": -29, "longitude": 24};
    latlong["ZM"] = {"latitude": -15, "longitude": 30};
    latlong["ZW"] = {"latitude": -20, "longitude": 30};
    var mapData = [
        {"code": "AF", "name": "Afghanistan", "value": 32358260, "color": "#EF6C00"},
        {"code": "AL", "name": "Albania", "value": 3215988, "color": "#5b69bc"},
        {"code": "DZ", "name": "Algeria", "value": 35980193, "color": "#E5343D"},
        {"code": "AO", "name": "Angola", "value": 19618432, "color": "#E5343D"},
        {"code": "AR", "name": "Argentina", "value": 40764561, "color": "#558B2F"},
        {"code": "AM", "name": "Armenia", "value": 3100236, "color": "#5b69bc"},
        {"code": "AU", "name": "Australia", "value": 22605732, "color": "#8aabb0"},
        {"code": "AT", "name": "Austria", "value": 8413429, "color": "#5b69bc"},
        {"code": "AZ", "name": "Azerbaijan", "value": 9306023, "color": "#5b69bc"},
        {"code": "BH", "name": "Bahrain", "value": 1323535, "color": "#EF6C00"},
        {"code": "BD", "name": "Bangladesh", "value": 150493658, "color": "#EF6C00"},
        {"code": "BY", "name": "Belarus", "value": 9559441, "color": "#5b69bc"},
        {"code": "BE", "name": "Belgium", "value": 10754056, "color": "#5b69bc"},
        {"code": "BJ", "name": "Benin", "value": 9099922, "color": "#E5343D"},
        {"code": "BT", "name": "Bhutan", "value": 738267, "color": "#EF6C00"},
        {"code": "BO", "name": "Bolivia", "value": 10088108, "color": "#558B2F"},
        {"code": "BA", "name": "Bosnia and Herzegovina", "value": 3752228, "color": "#5b69bc"},
        {"code": "BW", "name": "Botswana", "value": 2030738, "color": "#E5343D"},
        {"code": "BR", "name": "Brazil", "value": 196655014, "color": "#558B2F"},
        {"code": "BN", "name": "Brunei", "value": 405938, "color": "#EF6C00"},
        {"code": "BG", "name": "Bulgaria", "value": 7446135, "color": "#5b69bc"},
        {"code": "BF", "name": "Burkina Faso", "value": 16967845, "color": "#E5343D"},
        {"code": "BI", "name": "Burundi", "value": 8575172, "color": "#E5343D"},
        {"code": "KH", "name": "Cambodia", "value": 14305183, "color": "#EF6C00"},
        {"code": "CM", "name": "Cameroon", "value": 20030362, "color": "#E5343D"},
        {"code": "CA", "name": "Canada", "value": 34349561, "color": "#a7a737"},
        {"code": "CV", "name": "Cape Verde", "value": 500585, "color": "#E5343D"},
        {"code": "CF", "name": "Central African Rep.", "value": 4486837, "color": "#E5343D"},
        {"code": "TD", "name": "Chad", "value": 11525496, "color": "#E5343D"},
        {"code": "CL", "name": "Chile", "value": 17269525, "color": "#558B2F"},
        {"code": "CN", "name": "China", "value": 1347565324, "color": "#EF6C00"},
        {"code": "CO", "name": "Colombia", "value": 46927125, "color": "#558B2F"},
        {"code": "KM", "name": "Comoros", "value": 753943, "color": "#E5343D"},
        {"code": "CD", "name": "Congo, Dem. Rep.", "value": 67757577, "color": "#E5343D"},
        {"code": "CG", "name": "Congo, Rep.", "value": 4139748, "color": "#E5343D"},
        {"code": "CR", "name": "Costa Rica", "value": 4726575, "color": "#a7a737"},
        {"code": "CI", "name": "Cote d'Ivoire", "value": 20152894, "color": "#E5343D"},
        {"code": "HR", "name": "Croatia", "value": 4395560, "color": "#5b69bc"},
        {"code": "CU", "name": "Cuba", "value": 11253665, "color": "#a7a737"},
        {"code": "CY", "name": "Cyprus", "value": 1116564, "color": "#5b69bc"},
        {"code": "CZ", "name": "Czech Rep.", "value": 10534293, "color": "#5b69bc"},
        {"code": "DK", "name": "Denmark", "value": 5572594, "color": "#5b69bc"},
        {"code": "DJ", "name": "Djibouti", "value": 905564, "color": "#E5343D"},
        {"code": "DO", "name": "Dominican Rep.", "value": 10056181, "color": "#a7a737"},
        {"code": "EC", "name": "Ecuador", "value": 14666055, "color": "#558B2F"},
        {"code": "EG", "name": "Egypt", "value": 82536770, "color": "#E5343D"},
        {"code": "SV", "name": "El Salvador", "value": 6227491, "color": "#a7a737"},
        {"code": "GQ", "name": "Equatorial Guinea", "value": 720213, "color": "#E5343D"},
        {"code": "ER", "name": "Eritrea", "value": 5415280, "color": "#E5343D"},
        {"code": "EE", "name": "Estonia", "value": 1340537, "color": "#5b69bc"},
        {"code": "ET", "name": "Ethiopia", "value": 84734262, "color": "#E5343D"},
        {"code": "FJ", "name": "Fiji", "value": 868406, "color": "#8aabb0"},
        {"code": "FI", "name": "Finland", "value": 5384770, "color": "#5b69bc"},
        {"code": "FR", "name": "France", "value": 63125894, "color": "#5b69bc"},
        {"code": "GA", "name": "Gabon", "value": 1534262, "color": "#E5343D"},
        {"code": "GM", "name": "Gambia", "value": 1776103, "color": "#E5343D"},
        {"code": "GE", "name": "Georgia", "value": 4329026, "color": "#5b69bc"},
        {"code": "DE", "name": "Germany", "value": 82162512, "color": "#5b69bc"},
        {"code": "GH", "name": "Ghana", "value": 24965816, "color": "#E5343D"},
        {"code": "GR", "name": "Greece", "value": 11390031, "color": "#5b69bc"},
        {"code": "GT", "name": "Guatemala", "value": 14757316, "color": "#a7a737"},
        {"code": "GN", "name": "Guinea", "value": 10221808, "color": "#E5343D"},
        {"code": "GW", "name": "Guinea-Bissau", "value": 1547061, "color": "#E5343D"},
        {"code": "GY", "name": "Guyana", "value": 756040, "color": "#558B2F"},
        {"code": "HT", "name": "Haiti", "value": 10123787, "color": "#a7a737"},
        {"code": "HN", "name": "Honduras", "value": 7754687, "color": "#a7a737"},
        {"code": "HK", "name": "Hong Kong, China", "value": 7122187, "color": "#EF6C00"},
        {"code": "HU", "name": "Hungary", "value": 9966116, "color": "#5b69bc"},
        {"code": "IS", "name": "Iceland", "value": 324366, "color": "#5b69bc"},
        {"code": "IN", "name": "India", "value": 1241491960, "color": "#EF6C00"},
        {"code": "ID", "name": "Indonesia", "value": 242325638, "color": "#EF6C00"},
        {"code": "IR", "name": "Iran", "value": 74798599, "color": "#EF6C00"},
        {"code": "IQ", "name": "Iraq", "value": 32664942, "color": "#EF6C00"},
        {"code": "IE", "name": "Ireland", "value": 4525802, "color": "#5b69bc"},
        {"code": "IL", "name": "Israel", "value": 7562194, "color": "#EF6C00"},
        {"code": "IT", "name": "Italy", "value": 60788694, "color": "#5b69bc"},
        {"code": "JM", "name": "Jamaica", "value": 2751273, "color": "#a7a737"},
        {"code": "JP", "name": "Japan", "value": 126497241, "color": "#EF6C00"},
        {"code": "JO", "name": "Jordan", "value": 6330169, "color": "#EF6C00"},
        {"code": "KZ", "name": "Kazakhstan", "value": 16206750, "color": "#EF6C00"},
        {"code": "KE", "name": "Kenya", "value": 41609728, "color": "#E5343D"},
        {"code": "KP", "name": "Korea, Dem. Rep.", "value": 24451285, "color": "#EF6C00"},
        {"code": "KR", "name": "Korea, Rep.", "value": 48391343, "color": "#EF6C00"},
        {"code": "KW", "name": "Kuwait", "value": 2818042, "color": "#EF6C00"},
        {"code": "KG", "name": "Kyrgyzstan", "value": 5392580, "color": "#EF6C00"},
        {"code": "LA", "name": "Laos", "value": 6288037, "color": "#EF6C00"},
        {"code": "LV", "name": "Latvia", "value": 2243142, "color": "#5b69bc"},
        {"code": "LB", "name": "Lebanon", "value": 4259405, "color": "#EF6C00"},
        {"code": "LS", "name": "Lesotho", "value": 2193843, "color": "#E5343D"},
        {"code": "LR", "name": "Liberia", "value": 4128572, "color": "#E5343D"},
        {"code": "LY", "name": "Libya", "value": 6422772, "color": "#E5343D"},
        {"code": "LT", "name": "Lithuania", "value": 3307481, "color": "#5b69bc"},
        {"code": "LU", "name": "Luxembourg", "value": 515941, "color": "#5b69bc"},
        {"code": "MK", "name": "Macedonia, FYR", "value": 2063893, "color": "#5b69bc"},
        {"code": "MG", "name": "Madagascar", "value": 21315135, "color": "#E5343D"},
        {"code": "MW", "name": "Malawi", "value": 15380888, "color": "#E5343D"},
        {"code": "MY", "name": "Malaysia", "value": 28859154, "color": "#EF6C00"},
        {"code": "ML", "name": "Mali", "value": 15839538, "color": "#E5343D"},
        {"code": "MR", "name": "Mauritania", "value": 3541540, "color": "#E5343D"},
        {"code": "MU", "name": "Mauritius", "value": 1306593, "color": "#E5343D"},
        {"code": "MX", "name": "Mexico", "value": 114793341, "color": "#a7a737"},
        {"code": "MD", "name": "Moldova", "value": 3544864, "color": "#5b69bc"},
        {"code": "MN", "name": "Mongolia", "value": 2800114, "color": "#EF6C00"},
        {"code": "ME", "name": "Montenegro", "value": 632261, "color": "#5b69bc"},
        {"code": "MA", "name": "Morocco", "value": 32272974, "color": "#E5343D"},
        {"code": "MZ", "name": "Mozambique", "value": 23929708, "color": "#E5343D"},
        {"code": "MM", "name": "Myanmar", "value": 48336763, "color": "#EF6C00"},
        {"code": "NA", "name": "Namibia", "value": 2324004, "color": "#E5343D"},
        {"code": "NP", "name": "Nepal", "value": 30485798, "color": "#EF6C00"},
        {"code": "NL", "name": "Netherlands", "value": 16664746, "color": "#5b69bc"},
        {"code": "NZ", "name": "New Zealand", "value": 4414509, "color": "#8aabb0"},
        {"code": "NI", "name": "Nicaragua", "value": 5869859, "color": "#a7a737"},
        {"code": "NE", "name": "Niger", "value": 16068994, "color": "#E5343D"},
        {"code": "NG", "name": "Nigeria", "value": 162470737, "color": "#E5343D"},
        {"code": "NO", "name": "Norway", "value": 4924848, "color": "#5b69bc"},
        {"code": "OM", "name": "Oman", "value": 2846145, "color": "#EF6C00"},
        {"code": "PK", "name": "Pakistan", "value": 176745364, "color": "#EF6C00"},
        {"code": "PA", "name": "Panama", "value": 3571185, "color": "#a7a737"},
        {"code": "PG", "name": "Papua New Guinea", "value": 7013829, "color": "#8aabb0"},
        {"code": "PY", "name": "Paraguay", "value": 6568290, "color": "#558B2F"},
        {"code": "PE", "name": "Peru", "value": 29399817, "color": "#558B2F"},
        {"code": "PH", "name": "Philippines", "value": 94852030, "color": "#EF6C00"},
        {"code": "PL", "name": "Poland", "value": 38298949, "color": "#5b69bc"},
        {"code": "PT", "name": "Portugal", "value": 10689663, "color": "#5b69bc"},
        {"code": "PR", "name": "Puerto Rico", "value": 3745526, "color": "#a7a737"},
        {"code": "QA", "name": "Qatar", "value": 1870041, "color": "#EF6C00"},
        {"code": "RO", "name": "Romania", "value": 21436495, "color": "#5b69bc"},
        {"code": "RU", "name": "Russia", "value": 142835555, "color": "#5b69bc"},
        {"code": "RW", "name": "Rwanda", "value": 10942950, "color": "#E5343D"},
        {"code": "SA", "name": "Saudi Arabia", "value": 28082541, "color": "#EF6C00"},
        {"code": "SN", "name": "Senegal", "value": 12767556, "color": "#E5343D"},
        {"code": "RS", "name": "Serbia", "value": 9853969, "color": "#5b69bc"},
        {"code": "SL", "name": "Sierra Leone", "value": 5997486, "color": "#E5343D"},
        {"code": "SG", "name": "Singapore", "value": 5187933, "color": "#EF6C00"},
        {"code": "SK", "name": "Slovak Republic", "value": 5471502, "color": "#5b69bc"},
        {"code": "SI", "name": "Slovenia", "value": 2035012, "color": "#5b69bc"},
        {"code": "SB", "name": "Solomon Islands", "value": 552267, "color": "#8aabb0"},
        {"code": "SO", "name": "Somalia", "value": 9556873, "color": "#E5343D"},
        {"code": "ZA", "name": "South Africa", "value": 50459978, "color": "#E5343D"},
        {"code": "ES", "name": "Spain", "value": 46454895, "color": "#5b69bc"},
        {"code": "LK", "name": "Sri Lanka", "value": 21045394, "color": "#EF6C00"},
        {"code": "SD", "name": "Sudan", "value": 34735288, "color": "#E5343D"},
        {"code": "SR", "name": "Suriname", "value": 529419, "color": "#558B2F"},
        {"code": "SZ", "name": "Swaziland", "value": 1203330, "color": "#E5343D"},
        {"code": "SE", "name": "Sweden", "value": 9440747, "color": "#5b69bc"},
        {"code": "CH", "name": "Switzerland", "value": 7701690, "color": "#5b69bc"},
        {"code": "SY", "name": "Syria", "value": 20766037, "color": "#EF6C00"},
        {"code": "TW", "name": "Taiwan", "value": 23072000, "color": "#EF6C00"},
        {"code": "TJ", "name": "Tajikistan", "value": 6976958, "color": "#EF6C00"},
        {"code": "TZ", "name": "Tanzania", "value": 46218486, "color": "#E5343D"},
        {"code": "TH", "name": "Thailand", "value": 69518555, "color": "#EF6C00"},
        {"code": "TG", "name": "Togo", "value": 6154813, "color": "#E5343D"},
        {"code": "TT", "name": "Trinidad and Tobago", "value": 1346350, "color": "#a7a737"},
        {"code": "TN", "name": "Tunisia", "value": 10594057, "color": "#E5343D"},
        {"code": "TR", "name": "Turkey", "value": 73639596, "color": "#5b69bc"},
        {"code": "TM", "name": "Turkmenistan", "value": 5105301, "color": "#EF6C00"},
        {"code": "UG", "name": "Uganda", "value": 34509205, "color": "#E5343D"},
        {"code": "UA", "name": "Ukraine", "value": 45190180, "color": "#5b69bc"},
        {"code": "AE", "name": "United Arab Emirates", "value": 7890924, "color": "#EF6C00"},
        {"code": "GB", "name": "United Kingdom", "value": 62417431, "color": "#5b69bc"},
        {"code": "US", "name": "United States", "value": 313085380, "color": "#a7a737"},
        {"code": "UY", "name": "Uruguay", "value": 3380008, "color": "#558B2F"},
        {"code": "UZ", "name": "Uzbekistan", "value": 27760267, "color": "#EF6C00"},
        {"code": "VE", "name": "Venezuela", "value": 29436891, "color": "#558B2F"},
        {"code": "PS", "name": "West Bank and Gaza", "value": 4152369, "color": "#EF6C00"},
        {"code": "VN", "name": "Vietnam", "value": 88791996, "color": "#EF6C00"},
        {"code": "YE", "name": "Yemen, Rep.", "value": 24799880, "color": "#EF6C00"},
        {"code": "ZM", "name": "Zambia", "value": 13474959, "color": "#E5343D"},
        {"code": "ZW", "name": "Zimbabwe", "value": 12754378, "color": "#E5343D"}];
    // get min and max values
    var minBulletSize = 3;
    var maxBulletSize = 70;
    var min = Infinity;
    var max = -Infinity;
    for (var i = 0; i < mapData.length; i++) {
        var value = mapData[ i ].value;
        if (value < min) {
            min = value;
        }
        if (value > max) {
            max = value;
        }
    }

    // it's better to use circle square to show difference between values, not a radius
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;
    // create circle for each country
    var images = [];
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[ i ];
        var value = dataItem.value;
        // calculate size of a bubble
        var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
            square = minSquare;
        }
        var size = Math.sqrt(square / (Math.PI * 2));
        var id = dataItem.code;
        images.push({
            "type": "circle",
            "theme": "light",
            "width": size,
            "height": size,
            "color": dataItem.color,
            "longitude": latlong[ id ].longitude,
            "latitude": latlong[ id ].latitude,
            "title": dataItem.name,
            "value": value
        });
    }

    // build map
    var map = AmCharts.makeChart("amchartMap1", {
        "type": "map",
        "projection": "eckert6",
//                    "titles": [{
//                            "text": "Population of the World in 2011",
//                            "size": 14
//                        }, {
//                            "text": "source: Gapminder",
//                            "size": 11
//                        }],
        "areasSettings": {
            //"unlistedAreasColor": "#000000",
            //"unlistedAreasAlpha": 0.1
        },
        "dataProvider": {
            "map": "worldLow",
            "images": images
        },
        "export": {
            "enabled": true
        }


    });
    //Map with curved lines 

    // svg path for target icon
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
    // svg path for plane icon
    var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";
    var map = AmCharts.makeChart("amchartMap2", {
        "type": "map",
        "theme": "light",
        "dataProvider": {
            "map": "worldLow",
            "zoomLevel": 3.5,
            "zoomLongitude": 90.356331,
            "zoomLatitude": 23.684994,
            "lines": [{
                    "latitudes": [23.684994, 20.593684],
                    "longitudes": [90.356331, 78.962880]
                }, {
                    "latitudes": [23.684994, 35.861660],
                    "longitudes": [90.356331, 104.195397]
                }, {
                    "latitudes": [23.684994, 30.375321],
                    "longitudes": [90.356331, 69.345116]
                }, {
                    "latitudes": [23.684994, 15.870032],
                    "longitudes": [90.356331, 100.992541]
                }, {
                    "latitudes": [23.684994, 22.396428],
                    "longitudes": [90.356331, 114.109497]
                }, {
                    "latitudes": [23.684994, 46.862496],
                    "longitudes": [90.356331, 103.846656]
                }, {
                    "latitudes": [23.684994, 48.019573],
                    "longitudes": [90.356331, 66.923684]
                }, {
                    "latitudes": [23.684994, 4.210484],
                    "longitudes": [90.356331, 101.975766]
                }, {
                    "latitudes": [23.684994, 33.939110],
                    "longitudes": [90.356331, 67.709953]
                }, {
                    "latitudes": [23.684994, 7.873054],
                    "longitudes": [90.356331, 80.771797]
                }, {
                    "latitudes": [23.684994, 1.352083],
                    "longitudes": [90.356331, 103.819836]
                }, {
                    "latitudes": [23.684994, 21.916221],
                    "longitudes": [90.356331, 95.955974]
                }],
            "images": [{
                    "id": "bangladesh",
                    "svgPath": targetSVG,
                    "title": "Bangladesh",
                    "latitude": 23.684994,
                    "longitude": 90.356331,
                    "scale": 1
                }, {
                    "svgPath": targetSVG,
                    "title": "India",
                    "latitude": 20.593684,
                    "longitude": 78.962880,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "China",
                    "latitude": 35.861660,
                    "longitude": 104.195397,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Pakistan",
                    "latitude": 30.375321,
                    "longitude": 69.345116,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Thailand",
                    "latitude": 15.870032,
                    "longitude": 100.992541,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Hong Kong",
                    "latitude": 22.396428,
                    "longitude": 114.109497,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Mongolia",
                    "latitude": 46.862496,
                    "longitude": 103.846656,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Kazakhstan",
                    "latitude": 48.019573,
                    "longitude": 66.923684,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Malaysia",
                    "latitude": 4.210484,
                    "longitude": 101.975766,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Afghanistan",
                    "latitude": 33.939110,
                    "longitude": 67.709953,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Sri Lanka",
                    "latitude": 7.873054,
                    "longitude": 80.771797,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Singapore",
                    "latitude": 1.352083,
                    "longitude": 103.819836,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Maynmar",
                    "latitude": 21.916221,
                    "longitude": 95.955974,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Stockholm",
                    "latitude": 59.3328,
                    "longitude": 18.0645,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Bern",
                    "latitude": 46.9480,
                    "longitude": 7.4481,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Kiev",
                    "latitude": 50.4422,
                    "longitude": 30.5367,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510,
                    "scale": 0.5
                }, {
                    "svgPath": targetSVG,
                    "title": "New York",
                    "latitude": 40.43,
                    "longitude": -74,
                    "scale": 0.5
                }]
        },
        "areasSettings": {
            "unlistedAreasColor": "#558B2F",
            "unlistedAreasAlpha": 0.9
        },
        "imagesSettings": {
            "color": "#CC0000",
            "rollOverColor": "#CC0000",
            "selectedColor": "#000000"
        },
        "linesSettings": {
            "arc": -0.7, // this makes lines curved. Use value from -1 to 1
            "arrow": "middle",
            "color": "#CC0000",
            "alpha": 0.4,
            "arrowAlpha": 1,
            "arrowSize": 4
        },
        "zoomControl": {
            "gridHeight": 100,
            "draggerAlpha": 1,
            "gridAlpha": 0.2
        },
        "backgroundZoomsToTop": true,
        "linesAboveImages": true,
        "export": {
            "enabled": true
        }
    });


    //Animations along lines
    /**
     * SVG path for target icon
     */
    var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    /**
     * SVG path for plane icon
     */
    var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

    /**
     * Create the map
     */
    var map = AmCharts.makeChart("amchartMap3", {
        "type": "map",
        "theme": "light",

        "projection": "winkel3",
        "dataProvider": {
            "map": "worldLow",

            "lines": [{
                    "id": "line1",
                    "arc": -0.85,
                    "alpha": 0.3,
                    "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                    "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
                }, {
                    "id": "line2",
                    "alpha": 0,
                    "color": "#E5343D",
                    "latitudes": [23.684994, 48.8567, 43.8163, 34.3, 23, 61.524010, 20.593684, 33.223191],
                    "longitudes": [90.356331, 2.3510, -79.4287, -118.15, -82, 105.318756, 78.962880, 43.679291]
                }],
            "images": [{
                    "svgPath": targetSVG,
                    "title": "Bangladesh",
                    "latitude": 23.684994,
                    "longitude": 90.356331
                }, {
                    "svgPath": targetSVG,
                    "title": "Paris",
                    "latitude": 48.8567,
                    "longitude": 2.3510
                }, {
                    "svgPath": targetSVG,
                    "title": "Toronto",
                    "latitude": 43.8163,
                    "longitude": -79.4287
                }, {
                    "svgPath": targetSVG,
                    "title": "Los Angeles",
                    "latitude": 34.3,
                    "longitude": -118.15
                }, {
                    "svgPath": targetSVG,
                    "title": "Havana",
                    "latitude": 23,
                    "longitude": -82
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "Russia",
                    "latitude": 61.524010,
                    "longitude": 105.318756
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "India",
                    "latitude": 20.593684,
                    "longitude": 78.962880
                }, {}, {
                    "svgPath": targetSVG,
                    "title": "Iraq",
                    "latitude": 33.223191,
                    "longitude": 43.679291
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#000000",
                    "alpha": 0.1,
                    "animateAlongLine": true,
                    "lineId": "line2",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.3
                }, {
                    "svgPath": planeSVG,
                    "positionOnLine": 0,
                    "color": "#585869",
                    "animateAlongLine": true,
                    "lineId": "line1",
                    "flipDirection": true,
                    "loop": true,
                    "scale": 0.03,
                    "positionScale": 1.8
                }]
        },

        "areasSettings": {
            "unlistedAreasColor": "#5b69bc"
        },

        "imagesSettings": {
            "color": "#E5343D",
            "rollOverColor": "#E5343D",
            "selectedColor": "#E5343D",
            "pauseDuration": 0.2,
            "animationDuration": 4,
            "adjustAnimationSpeed": true
        },

        "linesSettings": {
            "color": "#E5343D",
            "alpha": 0.4
        },

        "export": {
            "enabled": true
        }

    });



    //US heat (choropleth) map
    var map = AmCharts.makeChart("amchartMap4", {
        "type": "map",
        "theme": "light",
        "colorSteps": 10,

        "dataProvider": {
            "map": "usaLow",
            "areas": [{
                    "id": "US-AL",
                    "value": 4447100
                }, {
                    "id": "US-AK",
                    "value": 626932
                }, {
                    "id": "US-AZ",
                    "value": 5130632
                }, {
                    "id": "US-AR",
                    "value": 2673400
                }, {
                    "id": "US-CA",
                    "value": 33871648
                }, {
                    "id": "US-CO",
                    "value": 4301261
                }, {
                    "id": "US-CT",
                    "value": 3405565
                }, {
                    "id": "US-DE",
                    "value": 783600
                }, {
                    "id": "US-FL",
                    "value": 15982378
                }, {
                    "id": "US-GA",
                    "value": 8186453
                }, {
                    "id": "US-HI",
                    "value": 1211537
                }, {
                    "id": "US-ID",
                    "value": 1293953
                }, {
                    "id": "US-IL",
                    "value": 12419293
                }, {
                    "id": "US-IN",
                    "value": 6080485
                }, {
                    "id": "US-IA",
                    "value": 2926324
                }, {
                    "id": "US-KS",
                    "value": 2688418
                }, {
                    "id": "US-KY",
                    "value": 4041769
                }, {
                    "id": "US-LA",
                    "value": 4468976
                }, {
                    "id": "US-ME",
                    "value": 1274923
                }, {
                    "id": "US-MD",
                    "value": 5296486
                }, {
                    "id": "US-MA",
                    "value": 6349097
                }, {
                    "id": "US-MI",
                    "value": 9938444
                }, {
                    "id": "US-MN",
                    "value": 4919479
                }, {
                    "id": "US-MS",
                    "value": 2844658
                }, {
                    "id": "US-MO",
                    "value": 5595211
                }, {
                    "id": "US-MT",
                    "value": 902195
                }, {
                    "id": "US-NE",
                    "value": 1711263
                }, {
                    "id": "US-NV",
                    "value": 1998257
                }, {
                    "id": "US-NH",
                    "value": 1235786
                }, {
                    "id": "US-NJ",
                    "value": 8414350
                }, {
                    "id": "US-NM",
                    "value": 1819046
                }, {
                    "id": "US-NY",
                    "value": 18976457
                }, {
                    "id": "US-NC",
                    "value": 8049313
                }, {
                    "id": "US-ND",
                    "value": 642200
                }, {
                    "id": "US-OH",
                    "value": 11353140
                }, {
                    "id": "US-OK",
                    "value": 3450654
                }, {
                    "id": "US-OR",
                    "value": 3421399
                }, {
                    "id": "US-PA",
                    "value": 12281054
                }, {
                    "id": "US-RI",
                    "value": 1048319
                }, {
                    "id": "US-SC",
                    "value": 4012012
                }, {
                    "id": "US-SD",
                    "value": 754844
                }, {
                    "id": "US-TN",
                    "value": 5689283
                }, {
                    "id": "US-TX",
                    "value": 20851820
                }, {
                    "id": "US-UT",
                    "value": 2233169
                }, {
                    "id": "US-VT",
                    "value": 608827
                }, {
                    "id": "US-VA",
                    "value": 7078515
                }, {
                    "id": "US-WA",
                    "value": 5894121
                }, {
                    "id": "US-WV",
                    "value": 1808344
                }, {
                    "id": "US-WI",
                    "value": 5363675
                }, {
                    "id": "US-WY",
                    "value": 493782
                }]
        },

        "areasSettings": {
            "autoZoom": true
        },

        "valueLegend": {
            "right": 10,
            "minValue": "little",
            "maxValue": "a lot!"
        },

        "export": {
            "enabled": true
        }

    });

    //Selecting multiple areas map

    var map = AmCharts.makeChart("amchartMap5", {
        "type": "map",
        "theme": "light",

        "panEventsEnabled": true,
        //"backgroundColor": "#666666",
        //"backgroundAlpha": 1,
        "dataProvider": {
            "map": "usaLow",
            "getAreasFromMap": true
        },
        "areasSettings": {
            "autoZoom": false,
            "color": "#CDCDCD",
            "colorSolid": "#5EB7DE",
            "selectedColor": "#558B2F",
            "outlineColor": "#666666",
            "rollOverColor": "#558B2F",
            "rollOverOutlineColor": "#FFFFFF",
            "selectable": true
        },
        "listeners": [{
                "event": "clickMapObject",
                "method": function (event) {
                    // deselect the area by assigning all of the dataProvider as selected object
                    map.selectedObject = map.dataProvider;

                    // toggle showAsSelected
                    event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

                    // bring it to an appropriate color
                    map.returnInitialColor(event.mapObject);

                    // let's build a list of currently selected states
                    var states = [];
                    for (var i in map.dataProvider.areas) {
                        var area = map.dataProvider.areas[ i ];
                        if (area.showAsSelected) {
                            states.push(area.title);
                        }
                    }
                }
            }],
        "export": {
            "enabled": true
        }
    });
});