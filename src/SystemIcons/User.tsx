import React from 'react';

import { IIconProps } from '../types';

const User: React.FC<IIconProps> = ({ width = '40', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={width} height={height} rx="20" fill="#86E19F" fillOpacity="0.16" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4991 15.5C16.4991 13.5669 18.0659 12 19.9985 12C21.931 12 23.4979 13.5669 23.4979 15.5C23.4979 17.4331 21.931 19 19.9985 19C18.0659 19 16.4991 17.4331 16.4991 15.5ZM19.9985 10C16.9611 10 14.4991 12.4626 14.4991 15.5C14.4991 18.5374 16.9611 21 19.9985 21C23.0358 21 25.4979 18.5374 25.4979 15.5C25.4979 12.4626 23.0358 10 19.9985 10ZM12.0091 27.8347C11.9513 27.2905 12.1501 26.2913 13.2155 25.3977C14.2886 24.4976 16.3201 23.6464 19.9988 23.6464C23.6775 23.6464 25.709 24.4976 26.7822 25.3977C27.8476 26.2914 28.0464 27.2905 27.9887 27.8347L27.9831 27.8873V27.9359L27.9826 27.9398C27.9816 27.9464 27.9798 27.955 27.977 27.9645C27.9741 27.9737 27.971 27.9814 27.9682 27.9871C27.9648 27.9881 27.9602 27.9894 27.9542 27.9907C27.9371 27.9944 27.9067 27.9989 27.8601 27.9989H27.8547H27.8491H27.8434H27.8374H27.8312H27.8248H27.8182H27.8114H27.8044H27.7972H27.7898H27.7822H27.7744H27.7664H27.7582H27.7498H27.7412H27.7324H27.7234H27.7142H27.7048H27.6952H27.6855H27.6755H27.6653H27.655H27.6445H27.6337H27.6228H27.6117H27.6004H27.5889H27.5773H27.5654H27.5534H27.5411H27.5287H27.5161H27.5034H27.4904H27.4773H27.4639H27.4504H27.4367H27.4229H27.4088H27.3946H27.3802H27.3656H27.3509H27.3359H27.3208H27.3056H27.2901H27.2745H27.2587H27.2427H27.2266H27.2103H27.1938H27.1771H27.1603H27.1433H27.1262H27.1089H27.0914H27.0737H27.0559H27.0379H27.0198H27.0015H26.983H26.9643H26.9456H26.9266H26.9075H26.8882H26.8688H26.8492H26.8294H26.8095H26.7895H26.7692H26.7489H26.7283H26.7077H26.6868H26.6658H26.6447H26.6234H26.602H26.5804H26.5587H26.5368H26.5147H26.4926H26.4702H26.4478H26.4251H26.4024H26.3795H26.3564H26.3332H26.3099H26.2864H26.2628H26.239H26.2151H26.1911H26.1669H26.1426H26.1182H26.0936H26.0688H26.044H26.019H25.9939H25.9686H25.9432H25.9177H25.892H25.8662H25.8403H25.8143H25.7881H25.7618H25.7354H25.7088H25.6821H25.6553H25.6284H25.6013H25.5741H25.5468H25.5194H25.4918H25.4642H25.4364H25.4085H25.3804H25.3523H25.324H25.2956H25.2671H25.2385H25.2097H25.1809H25.1519H25.1228H25.0937H25.0644H25.0349H25.0054H24.9758H24.946H24.9162H24.8862H24.8561H24.8259H24.7956H24.7652H24.7347H24.7041H24.6734H24.6426H24.6117H24.5807H24.5496H24.5183H24.487H24.4556H24.4241H24.3925H24.3607H24.3289H24.297H24.265H24.2329H24.2007H24.1684H24.136H24.1035H24.071H24.0383H24.0056H23.9727H23.9398H23.9068H23.8737H23.8405H23.8072H23.7738H23.7403H23.7068H23.6732H23.6395H23.6057H23.5718H23.5378H23.5038H23.4697H23.4355H23.4012H23.3668H23.3324H23.2979H23.2633H23.2286H23.1938H23.159H23.1241H23.0892H23.0541H23.019H22.9838H22.9486H22.9132H22.8778H22.8424H22.8068H22.7712H22.7355H22.6998H22.664H22.6281H22.5922H22.5562H22.5201H22.484H22.4478H22.4115H22.3752H22.3389H22.3024H22.2659H22.2294H22.1928H22.1561H22.1194H22.0826H22.0458H22.0089H21.9719H21.9349H21.8979H21.8608H21.8236H21.7864H21.7491H21.7118H21.6745H21.6371H21.5996H21.5621H21.5246H21.487H21.4493H21.4116H21.3739H21.3361H21.2983H21.2605H21.2226H21.1846H21.1467H21.1086H21.0706H21.0325H20.9943H20.9562H20.918H20.8797H20.8414H20.8031H20.7648H20.7264H20.688H20.6495H20.6111H20.5725H20.534H20.4954H20.4568H20.4182H20.3796H20.3409H20.3022H20.2634H20.2247H20.1859H20.1471H20.1083H20.0694H20.0305H19.9916H19.9527H19.9138H19.8748H19.8359H19.7969H19.7578H19.7188H19.6798H19.6407H19.6016H19.5625H19.5234H19.4843H19.4452H19.4061H19.3669H19.3277H19.2886H19.2494H19.2102H19.171H19.1318H19.0926H19.0534H19.0141H18.9749H18.9357H18.8964H18.8572H18.818H18.7787H18.7395H18.7002H18.661H18.6217H18.5825H18.5432H18.504H18.4648H18.4255H18.3863H18.3471H18.3079H18.2686H18.2294H18.1903H18.1511H18.1119H18.0727H18.0336H17.9944H17.9553H17.9162H17.877H17.8379H17.7989H17.7598H17.7207H17.6817H17.6427H17.6037H17.5647H17.5257H17.4868H17.4478H17.4089H17.3701H17.3312H17.2923H17.2535H17.2147H17.176H17.1372H17.0985H17.0598H17.0211H16.9825H16.9439H16.9053H16.8667H16.8282H16.7897H16.7512H16.7128H16.6744H16.636H16.5977H16.5594H16.5211H16.4829H16.4447H16.4065H16.3684H16.3303H16.2923H16.2543H16.2163H16.1784H16.1405H16.1027H16.0649H16.0271H15.9894H15.9518H15.9142H15.8766H15.8391H15.8016H15.7641H15.7268H15.6894H15.6521H15.6149H15.5777H15.5406H15.5035H15.4665H15.4295H15.3926H15.3557H15.3189H15.2821H15.2454H15.2088H15.1722H15.1357H15.0992H15.0628H15.0264H14.9901H14.9539H14.9177H14.8816H14.8456H14.8096H14.7737H14.7379H14.7021H14.6664H14.6307H14.5952H14.5597H14.5242H14.4888H14.4535H14.4183H14.3832H14.3481H14.3131H14.2781H14.2433H14.2085H14.1738H14.1391H14.1046H14.0701H14.0357H14.0013H13.9671H13.9329H13.8988H13.8648H13.8309H13.7971H13.7633H13.7296H13.696H13.6625H13.6291H13.5958H13.5625H13.5294H13.4963H13.4633H13.4304H13.3976H13.3649H13.3323H13.2997H13.2673H13.235H13.2027H13.1705H13.1385H13.1065H13.0746H13.0429H13.0112H12.9796H12.9481H12.9168H12.8855H12.8543H12.8232H12.7922H12.7614H12.7306H12.6999H12.6694H12.6389H12.6086H12.5783H12.5482H12.5182H12.4882H12.4584H12.4287H12.3991H12.3696H12.3403H12.311H12.2819H12.2528H12.2239H12.1951H12.1664H12.1379L12.1361 27.9989L12.1309 27.9986C12.1263 27.9983 12.1204 27.9978 12.1132 27.9968C12.0985 27.9949 12.0817 27.9917 12.0645 27.987C12.0435 27.9814 12.0273 27.9751 12.0158 27.9698C12.0152 27.9621 12.0147 27.9523 12.0147 27.9402V27.8873L12.0091 27.8347ZM19.9988 21.6464C16.041 21.6464 13.4868 22.5597 11.9302 23.8654C10.3871 25.1597 9.90391 26.7805 10.0153 27.9956C10.0324 28.7423 10.3949 29.2893 10.8743 29.6146C11.3121 29.9118 11.8021 29.9989 12.1379 29.9989H12.1664H12.1951H12.2239H12.2528H12.2819H12.311H12.3403H12.3696H12.3991H12.4287H12.4584H12.4882H12.5182H12.5482H12.5783H12.6086H12.6389H12.6694H12.6999H12.7306H12.7614H12.7922H12.8232H12.8543H12.8855H12.9168H12.9481H12.9796H13.0112H13.0429H13.0746H13.1065H13.1385H13.1705H13.2027H13.235H13.2673H13.2997H13.3323H13.3649H13.3976H13.4304H13.4633H13.4963H13.5294H13.5625H13.5958H13.6291H13.6625H13.696H13.7296H13.7633H13.7971H13.8309H13.8648H13.8988H13.9329H13.9671H14.0013H14.0357H14.0701H14.1046H14.1391H14.1738H14.2085H14.2433H14.2781H14.3131H14.3481H14.3832H14.4183H14.4535H14.4888H14.5242H14.5597H14.5952H14.6307H14.6664H14.7021H14.7379H14.7737H14.8096H14.8456H14.8816H14.9177H14.9539H14.9901H15.0264H15.0628H15.0992H15.1357H15.1722H15.2088H15.2454H15.2821H15.3189H15.3557H15.3926H15.4295H15.4665H15.5035H15.5406H15.5777H15.6149H15.6521H15.6894H15.7268H15.7641H15.8016H15.8391H15.8766H15.9142H15.9518H15.9894H16.0271H16.0649H16.1027H16.1405H16.1784H16.2163H16.2543H16.2923H16.3303H16.3684H16.4065H16.4447H16.4829H16.5211H16.5594H16.5977H16.636H16.6744H16.7128H16.7512H16.7897H16.8282H16.8667H16.9053H16.9439H16.9825H17.0211H17.0598H17.0985H17.1372H17.176H17.2147H17.2535H17.2923H17.3312H17.3701H17.4089H17.4478H17.4868H17.5257H17.5647H17.6037H17.6427H17.6817H17.7207H17.7598H17.7989H17.8379H17.877H17.9162H17.9553H17.9944H18.0336H18.0727H18.1119H18.1511H18.1903H18.2294H18.2686H18.3079H18.3471H18.3863H18.4255H18.4648H18.504H18.5432H18.5825H18.6217H18.661H18.7002H18.7395H18.7787H18.818H18.8572H18.8964H18.9357H18.9749H19.0141H19.0534H19.0926H19.1318H19.171H19.2102H19.2494H19.2886H19.3277H19.3669H19.4061H19.4452H19.4843H19.5234H19.5625H19.6016H19.6407H19.6798H19.7188H19.7578H19.7969H19.8359H19.8748H19.9138H19.9527H19.9916H20.0305H20.0694H20.1083H20.1471H20.1859H20.2247H20.2634H20.3022H20.3409H20.3796H20.4182H20.4568H20.4954H20.534H20.5725H20.6111H20.6495H20.688H20.7264H20.7648H20.8031H20.8414H20.8797H20.918H20.9562H20.9943H21.0325H21.0706H21.1086H21.1467H21.1846H21.2226H21.2605H21.2983H21.3361H21.3739H21.4116H21.4493H21.487H21.5246H21.5621H21.5996H21.6371H21.6745H21.7118H21.7491H21.7864H21.8236H21.8608H21.8979H21.9349H21.9719H22.0089H22.0458H22.0826H22.1194H22.1561H22.1928H22.2294H22.2659H22.3024H22.3389H22.3752H22.4115H22.4478H22.484H22.5201H22.5562H22.5922H22.6281H22.664H22.6998H22.7355H22.7712H22.8068H22.8424H22.8778H22.9132H22.9486H22.9838H23.019H23.0541H23.0892H23.1241H23.159H23.1938H23.2286H23.2633H23.2979H23.3324H23.3668H23.4012H23.4355H23.4697H23.5038H23.5378H23.5718H23.6057H23.6395H23.6732H23.7068H23.7403H23.7738H23.8072H23.8405H23.8737H23.9068H23.9398H23.9727H24.0056H24.0383H24.071H24.1035H24.136H24.1684H24.2007H24.2329H24.265H24.297H24.3289H24.3607H24.3925H24.4241H24.4556H24.487H24.5183H24.5496H24.5807H24.6117H24.6426H24.6734H24.7041H24.7347H24.7652H24.7956H24.8259H24.8561H24.8862H24.9162H24.946H24.9758H25.0054H25.0349H25.0644H25.0937H25.1228H25.1519H25.1809H25.2097H25.2385H25.2671H25.2956H25.324H25.3523H25.3804H25.4085H25.4364H25.4642H25.4918H25.5194H25.5468H25.5741H25.6013H25.6284H25.6553H25.6821H25.7088H25.7354H25.7618H25.7881H25.8143H25.8403H25.8662H25.892H25.9177H25.9432H25.9686H25.9939H26.019H26.044H26.0688H26.0936H26.1182H26.1426H26.1669H26.1911H26.2151H26.239H26.2628H26.2864H26.3099H26.3332H26.3564H26.3795H26.4024H26.4251H26.4478H26.4702H26.4926H26.5147H26.5368H26.5587H26.5804H26.602H26.6234H26.6447H26.6658H26.6868H26.7077H26.7283H26.7489H26.7692H26.7895H26.8095H26.8294H26.8492H26.8688H26.8882H26.9075H26.9266H26.9456H26.9643H26.983H27.0015H27.0198H27.0379H27.0559H27.0737H27.0914H27.1089H27.1262H27.1433H27.1603H27.1771H27.1938H27.2103H27.2266H27.2427H27.2587H27.2745H27.2901H27.3056H27.3208H27.3359H27.3509H27.3656H27.3802H27.3946H27.4088H27.4229H27.4367H27.4504H27.4639H27.4773H27.4904H27.5034H27.5161H27.5287H27.5411H27.5534H27.5654H27.5773H27.5889H27.6004H27.6117H27.6228H27.6337H27.6445H27.655H27.6653H27.6755H27.6855H27.6952H27.7048H27.7142H27.7234H27.7324H27.7412H27.7498H27.7582H27.7664H27.7744H27.7822H27.7898H27.7972H27.8044H27.8114H27.8182H27.8248H27.8312H27.8374H27.8434H27.8491H27.8547H27.8601C28.6111 29.9989 29.1897 29.6849 29.5532 29.2088C29.8627 28.8036 29.9711 28.343 29.9822 27.9991C30.0947 26.7836 29.612 25.1609 28.0674 23.8654C26.5108 22.5597 23.9566 21.6464 19.9988 21.6464Z"
      fill="#00AF66"
    />
  </svg>
);

User.displayName = 'User';
export default User;