import inside from 'point-in-polygon'

const zones = [
  {
    zone: 'dc',
    polygon: [
      [
        [-77.119751, 38.93435],
        [-77.118861, 38.935356],
        [-77.099914, 38.949699],
        [-77.041018, 38.995548],
        [-77.013763, 38.974781],
        [-76.909393, 38.892852],
        [-77.039006, 38.791645],
        [-77.039191, 38.800496],
        [-77.037288, 38.810527],
        [-77.037343, 38.814635],
        [-77.038412, 38.81609],
        [-77.03912, 38.818885],
        [-77.038923, 38.819504],
        [-77.039972, 38.820254],
        [-77.039496, 38.821656],
        [-77.040758, 38.82209],
        [-77.041107, 38.82294],
        [-77.040618, 38.823604],
        [-77.039769, 38.823751],
        [-77.038784, 38.824473],
        [-77.037755, 38.830138],
        [-77.039116, 38.8321],
        [-77.041889, 38.83371],
        [-77.042579, 38.833332],
        [-77.041984, 38.831484],
        [-77.042805, 38.83119],
        [-77.043207, 38.83143],
        [-77.043774, 38.833361],
        [-77.044442, 38.833819],
        [-77.045218, 38.835928],
        [-77.045273, 38.838476],
        [-77.046513, 38.839894],
        [-77.04587, 38.840148],
        [-77.046736, 38.840632],
        [-77.047489, 38.840655],
        [-77.048025, 38.841259],
        [-77.046146, 38.841183],
        [-77.044739, 38.840214],
        [-77.043904, 38.840198],
        [-77.043406, 38.840558],
        [-77.043065, 38.839795],
        [-77.041784, 38.839516],
        [-77.038935, 38.839248],
        [-77.036804, 38.839405],
        [-77.034593, 38.840101],
        [-77.033902, 38.84281],
        [-77.033066, 38.844549],
        [-77.032267, 38.848016],
        [-77.032211, 38.851672],
        [-77.032843, 38.855027],
        [-77.03417, 38.85768],
        [-77.035387, 38.859749],
        [-77.036805, 38.861111],
        [-77.037585, 38.861265],
        [-77.038082, 38.863293],
        [-77.039738, 38.863241],
        [-77.039858, 38.86269],
        [-77.04037, 38.862375],
        [-77.041725, 38.863236],
        [-77.042763, 38.863372],
        [-77.042452, 38.863945],
        [-77.042505, 38.863684],
        [-77.040787, 38.86366],
        [-77.037924, 38.864284],
        [-77.037735, 38.865106],
        [-77.037998, 38.866664],
        [-77.039464, 38.869732],
        [-77.040684, 38.871441],
        [-77.043334, 38.87411],
        [-77.045869, 38.875613],
        [-77.047219, 38.874958],
        [-77.046394, 38.873966],
        [-77.04654, 38.873046],
        [-77.04624, 38.872455],
        [-77.046517, 38.872057],
        [-77.049154, 38.871314],
        [-77.050155, 38.871647],
        [-77.051682, 38.873906],
        [-77.051531, 38.876564],
        [-77.05354, 38.879006],
        [-77.053751, 38.878876],
        [-77.054141, 38.879712],
        [-77.055581, 38.880342],
        [-77.057931, 38.880262],
        [-77.059141, 38.880914],
        [-77.064251, 38.888956],
        [-77.064409, 38.889598],
        [-77.063773, 38.89019],
        [-77.06399, 38.890944],
        [-77.064643, 38.891715],
        [-77.065133, 38.893557],
        [-77.066005, 38.89453],
        [-77.065905, 38.894833],
        [-77.067224, 38.897161],
        [-77.067595, 38.898094],
        [-77.067572, 38.899229],
        [-77.068641, 38.900288],
        [-77.070657, 38.901195],
        [-77.073373, 38.901123],
        [-77.078248, 38.902368],
        [-77.082656, 38.902274],
        [-77.093216, 38.905767],
        [-77.102032, 38.911916],
        [-77.103415, 38.913281],
        [-77.104134, 38.915923],
        [-77.105587, 38.91763],
        [-77.106801, 38.920026],
        [-77.108513, 38.921636],
        [-77.112659, 38.924657],
        [-77.114903, 38.927376],
        [-77.115957, 38.928165],
        [-77.116466, 38.929631],
        [-77.119751, 38.93435]
      ]
    ]
  },
  {
    zone: 'sf',
    polygon: [
      [
        [-122.37787853390999, 37.83064841568094],
        [-122.36994113460699, 37.83213667925211],
        [-122.36324394613301, 37.823951232014124],
        [-122.35877916983996, 37.81427752120505],
        [-122.362660516188, 37.80757734146037],
        [-122.37242157068698, 37.81130099886952],
        [-122.372669618621, 37.81650991896509],
        [-122.37850005443501, 37.82650496024039],
        [-122.37787853390999, 37.83064841568094]
      ],
      [
        [-122.42134109018498, 37.869945511505385],
        [-122.41847038809001, 37.86176401720953],
        [-122.41847038809001, 37.85272131562273],
        [-122.41869814249802, 37.8527172119121],
        [-122.421438985378, 37.869968889457766],
        [-122.42134109018498, 37.869945511505385]
      ],
      [
        [-122.479156, 37.825579],
        [-122.478359, 37.828082],
        [-122.47951, 37.830418],
        [-122.478633, 37.831298],
        [-122.478063, 37.832457],
        [-122.476536031701, 37.832812274399636],
        [-122.47647302766799, 37.83251342297152],
        [-122.47915131912697, 37.825428],
        [-122.47985978948402, 37.82564062218788],
        [-122.479156, 37.825579]
      ],
      [
        [-122.514483, 37.780829],
        [-122.509842514521, 37.78461453939157],
        [-122.50531, 37.788312],
        [-122.49304871640601, 37.78793410737782],
        [-122.492883, 37.787929],
        [-122.48582733318202, 37.79061214090255],
        [-122.485783, 37.790629],
        [-122.478083, 37.810828],
        [-122.47033619921699, 37.80867139189766],
        [-122.46379252781, 37.804652871814035],
        [-122.44824114234397, 37.80725220637831],
        [-122.43969079741902, 37.80868135281327],
        [-122.42594241766503, 37.81097932419176],
        [-122.42504141293098, 37.811001816245124],
        [-122.42061236981199, 37.81111237978713],
        [-122.40745179565401, 37.81144091117681],
        [-122.39963841728202, 37.806566092433904],
        [-122.39813860391499, 37.80563034889729],
        [-122.389708127579, 37.795824561745306],
        [-122.385322783506, 37.79072381193527],
        [-122.384003454613, 37.78295662335993],
        [-122.38135881885202, 37.76738705251229],
        [-122.378998839983, 37.75349332137954],
        [-122.37877966177501, 37.7522029695325],
        [-122.373407007739, 37.7464515045796],
        [-122.36758037470399, 37.74021405182891],
        [-122.37585395584, 37.734978674784465],
        [-122.37009367469298, 37.73233109179268],
        [-122.369892784276, 37.73254997227599],
        [-122.367696537954, 37.73494289605509],
        [-122.365478294169, 37.734620893036784],
        [-122.35678420574199, 37.72950461870701],
        [-122.361748934553, 37.71500952294959],
        [-122.37041125718397, 37.71757233990206],
        [-122.374981099706, 37.7155577244955],
        [-122.37725066169001, 37.71455718793089],
        [-122.37859867457102, 37.70863422464115],
        [-122.39067399453201, 37.70863951067695],
        [-122.391373803144, 37.708331],
        [-122.404682, 37.708331],
        [-122.40529, 37.708264],
        [-122.405582, 37.708231],
        [-122.406481, 37.708323],
        [-122.41238, 37.708303],
        [-122.420082, 37.708231],
        [-122.420083, 37.708311],
        [-122.423353, 37.709251],
        [-122.42455, 37.710102],
        [-122.426737, 37.711225],
        [-122.428808, 37.712126],
        [-122.432796, 37.712996],
        [-122.433521, 37.713148],
        [-122.433707, 37.713143],
        [-122.433811, 37.713223],
        [-122.434004, 37.713286],
        [-122.434396, 37.713461],
        [-122.434541, 37.713476],
        [-122.43462, 37.713562],
        [-122.435209, 37.713826],
        [-122.435361, 37.713844],
        [-122.435448, 37.713933],
        [-122.436, 37.714181],
        [-122.436176, 37.714209],
        [-122.436282, 37.714307],
        [-122.436832, 37.714554],
        [-122.436992, 37.714575],
        [-122.43708, 37.714665],
        [-122.437655, 37.714923],
        [-122.437805, 37.71494],
        [-122.44102, 37.71646],
        [-122.440418, 37.717245],
        [-122.438329, 37.720016],
        [-122.438251, 37.720066],
        [-122.43747, 37.721099],
        [-122.437461, 37.721164],
        [-122.43715, 37.721575],
        [-122.435385, 37.723909],
        [-122.432447, 37.727637],
        [-122.431294, 37.72873],
        [-122.430111, 37.729931],
        [-122.430006, 37.729965],
        [-122.429294, 37.730681],
        [-122.429304, 37.730742],
        [-122.428038, 37.732016],
        [-122.430345, 37.732355],
        [-122.430948, 37.732338],
        [-122.435892, 37.731577],
        [-122.439558, 37.730191],
        [-122.439743, 37.731584],
        [-122.453411, 37.731531],
        [-122.453425, 37.73304],
        [-122.448873, 37.733069],
        [-122.44852, 37.736374],
        [-122.449464, 37.738016],
        [-122.453334, 37.736747],
        [-122.459592, 37.738533],
        [-122.458849, 37.739158],
        [-122.458082, 37.739099],
        [-122.454932, 37.741777],
        [-122.455748, 37.742075],
        [-122.455247, 37.742932],
        [-122.454807, 37.743422],
        [-122.454467, 37.743718],
        [-122.453773, 37.743219],
        [-122.450356, 37.743022],
        [-122.449861, 37.743265],
        [-122.451624, 37.745534],
        [-122.458691, 37.746859],
        [-122.459174, 37.747286],
        [-122.458635, 37.747769],
        [-122.461524, 37.751504],
        [-122.462125, 37.751903],
        [-122.463361, 37.753039],
        [-122.464462, 37.752899],
        [-122.4666, 37.752803],
        [-122.466469, 37.750939],
        [-122.466336, 37.749075],
        [-122.469549, 37.748903],
        [-122.470512, 37.74702],
        [-122.470235, 37.743289],
        [-122.470597, 37.737665],
        [-122.474233, 37.737476],
        [-122.474365, 37.739371],
        [-122.475409, 37.739325],
        [-122.475289, 37.737455],
        [-122.488518, 37.737002],
        [-122.490364, 37.73793],
        [-122.491335, 37.737293],
        [-122.491343, 37.734008],
        [-122.493784, 37.733989],
        [-122.496636, 37.733771],
        [-122.499196, 37.734312],
        [-122.501097, 37.735206],
        [-122.502558, 37.735557],
        [-122.505257, 37.735475],
        [-122.505376, 37.73557],
        [-122.506521, 37.735572],
        [-122.506717, 37.73547],
        [-122.50784028176801, 37.73542805427772],
        [-122.509396625851, 37.748840627583945],
        [-122.511136888777, 37.76383821348317],
        [-122.51197784205803, 37.77108554885997],
        [-122.511983, 37.77113],
        [-122.514483, 37.780829]
      ],
      [
        [-122.517678, 37.825199],
        [-122.516776, 37.824606],
        [-122.516081, 37.82521],
        [-122.51188, 37.824339],
        [-122.511081, 37.824444],
        [-122.505188, 37.822888],
        [-122.50538273577799, 37.82212805549859],
        [-122.52283641767401, 37.82471695878034],
        [-122.517678, 37.825199]
      ]
    ]
  }
]

export default function getZone(lat, lng) {
  var zone = null

  for (let index = 0; index < zones.length; index++) {
    for (let idx2 = 0; idx2 < zones[index].polygon.length; idx2++) {
      if (inside([lng, lat], zones[index].polygon[idx2])) {
        zone = zones[index].zone
        break
      }
    }
  }

  return zone
}
