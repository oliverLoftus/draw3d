class TinySword {
  constructor(x = 5) {
    this.v_001 = new Vertex(-4.235980 * x, 5.521068 * x, 7.872284 * x);
    this.v_002 = new Vertex(-5.048708 * x, 4.708340 * x, 7.872284 * x);
    this.v_003 = new Vertex(-5.588256 * x, 5.526944 * x, 7.678844 * x);
    this.v_004 = new Vertex(-5.054582 * x, 6.060620 * x, 7.678844 * x);
    this.v_005 = new Vertex(11.921460 * x, -11.448744 * x, 6.289208 * x);
    this.v_006 = new Vertex(12.899410 * x, -12.426826 * x, 4.002334 * x);
    this.v_007 = new Vertex(12.168764 * x, -10.776350 * x, 4.830120 * x);
    this.v_008 = new Vertex(11.602044 * x, -10.583810 * x, 6.501028 * x);
    this.v_009 = new Vertex(10.188098 * x, -9.715738 * x, 3.580428 * x);
    this.v_010 = new Vertex(11.248698 * x, -11.696080 * x, 4.829788 * x);
    this.v_011 = new Vertex(9.533700 * x, -9.556010 * x, 4.067674 * x);
    this.v_012 = new Vertex(-4.781742 * x, 2.342210 * x, 13.497522 * x);
    this.v_013 = new Vertex(-3.962086 * x, 2.830152 * x, 13.973528 * x);
    this.v_014 = new Vertex(-3.281176 * x, 2.148004 * x, 15.929620 * x);
    this.v_015 = new Vertex(-3.768478 * x, 1.328946 * x, 16.405770 * x);
    this.v_016 = new Vertex(0.675666 * x, -0.432354 * x, 8.850704 * x);
    this.v_017 = new Vertex(0.770270 * x, -0.836948 * x, 9.154186 * x);
    this.v_018 = new Vertex(0.250808 * x, -0.217698 * x, 9.425800 * x);
    this.v_019 = new Vertex(10.150742 * x, -8.052346 * x, 5.296450 * x);
    this.v_020 = new Vertex(9.566464 * x, -8.343060 * x, 4.233406 * x);
    this.v_021 = new Vertex(8.808458 * x, -7.610996 * x, 4.442420 * x);
    this.v_022 = new Vertex(8.068412 * x, -5.846084 * x, 6.459010 * x);
    this.v_023 = new Vertex(-5.762980 * x, 3.595396 * x, 17.713428 * x);
    this.v_024 = new Vertex(-6.677056 * x, 4.509474 * x, 15.089866 * x);
    this.v_025 = new Vertex(8.924716 * x, -6.699400 * x, 8.903046 * x);
    this.v_026 = new Vertex(10.810582 * x, -8.715910 * x, 7.194696 * x);
    this.v_027 = new Vertex(-2.276334 * x, 0.808116 * x, 19.300916 * x);
    this.v_028 = new Vertex(-4.446732 * x, 3.064062 * x, 20.364874 * x);
    this.v_029 = new Vertex(0.822294 * x, 1.298658 * x, 14.258086 * x);
    this.v_030 = new Vertex(4.308266 * x, -2.127124 * x, 11.925598 * x);
    this.v_031 = new Vertex(3.461526 * x, -1.281436 * x, 9.825136 * x);
    this.v_032 = new Vertex(0.535062 * x, 1.593336 * x, 11.912010 * x);
    this.v_033 = new Vertex(-1.869850 * x, 5.254102 * x, 13.497522 * x);
    this.v_034 = new Vertex(-3.365424 * x, 5.778214 * x, 10.603016 * x);
    this.v_035 = new Vertex(-5.353360 * x, 7.680750 * x, 12.438422 * x);
    this.v_036 = new Vertex(-4.037114 * x, 7.149416 * x, 15.089866 * x);
    this.v_037 = new Vertex(-1.675714 * x, 3.753538 * x, 15.929524 * x);
    this.v_038 = new Vertex(-2.357134 * x, 4.434450 * x, 13.974446 * x);
    this.v_039 = new Vertex(-0.367018 * x, 0.026650 * x, 21.309566 * x);
    this.v_040 = new Vertex(-0.532788 * x, 0.471474 * x, 22.188938 * x);
    this.v_041 = new Vertex(-7.208390 * x, 5.825722 * x, 12.438422 * x);
    this.v_042 = new Vertex(-5.306132 * x, 3.837914 * x, 10.604854 * x);
    this.v_043 = new Vertex(10.915672 * x, -10.492304 * x, 8.704180 * x);
    this.v_044 = new Vertex(9.127636 * x, -8.608902 * x, 10.888838 * x);
    this.v_045 = new Vertex(8.415822 * x, -8.546262 * x, 10.222296 * x);
    this.v_046 = new Vertex(-3.850478 * x, 4.324054 * x, 11.989962 * x);
    this.v_047 = new Vertex(-0.960942 * x, 1.434372 * x, 9.807928 * x);
    this.v_048 = new Vertex(-1.338780 * x, 0.157192 * x, 12.066746 * x);
    this.v_049 = new Vertex(6.719514 * x, -6.247014 * x, 4.022106 * x);
    this.v_050 = new Vertex(7.950644 * x, -7.478282 * x, 3.605454 * x);
    this.v_051 = new Vertex(8.083358 * x, -8.336096 * x, 4.442420 * x);
    this.v_052 = new Vertex(6.318280 * x, -7.598832 * x, 6.461534 * x);
    this.v_053 = new Vertex(6.866916 * x, -6.394876 * x, 12.395300 * x);
    this.v_054 = new Vertex(3.158372 * x, -2.686040 * x, 14.756514 * x);
    this.v_055 = new Vertex(1.932888 * x, -3.184656 * x, 12.348884 * x);
    this.v_056 = new Vertex(6.619440 * x, -6.505688 * x, 11.877450 * x);
    this.v_057 = new Vertex(-9.274858 * x, 11.300644 * x, 21.355980 * x);
    this.v_058 = new Vertex(-9.146562 * x, 12.322538 * x, 21.749708 * x);
    this.v_059 = new Vertex(-10.200838 * x, 10.673196 * x, 22.768974 * x);
    this.v_060 = new Vertex(-9.860284 * x, 10.332644 * x, 21.751730 * x);
    this.v_061 = new Vertex(-0.881612 * x, -0.295722 * x, 14.298640 * x);
    this.v_062 = new Vertex(-0.706890 * x, -0.305424 * x, 14.491658 * x);
    this.v_063 = new Vertex(-1.786912 * x, 2.259316 * x, 17.914518 * x);
    this.v_064 = new Vertex(-0.335756 * x, 2.748694 * x, 19.300916 * x);
    this.v_065 = new Vertex(0.445712 * x, 0.839378 * x, 21.309566 * x);
    this.v_066 = new Vertex(-9.733158 * x, 11.758944 * x, 18.946048 * x);
    this.v_067 = new Vertex(-2.591702 * x, 4.919092 * x, 20.364874 * x);
    this.v_068 = new Vertex(0.000886 * x, 1.005150 * x, 22.188940 * x);
    this.v_069 = new Vertex(10.028370 * x, -9.061338 * x, 4.067674 * x);
    this.v_070 = new Vertex(8.815422 * x, -9.094102 * x, 4.233408 * x);
    this.v_071 = new Vertex(-0.767576 * x, -0.411830 * x, 14.221270 * x);
    this.v_072 = new Vertex(-13.067898 * x, 10.836644 * x, 22.598242 * x);
    this.v_073 = new Vertex(-13.049792 * x, 11.985020 * x, 22.692190 * x);
    this.v_074 = new Vertex(-13.693010 * x, 12.628238 * x, 20.846036 * x);
    this.v_075 = new Vertex(-13.879240 * x, 11.647988 * x, 20.269540 * x);
    this.v_076 = new Vertex(-3.123036 * x, 6.235340 * x, 17.713428 * x);
    this.v_077 = new Vertex(1.636392 * x, -2.891380 * x, 9.921198 * x);
    this.v_078 = new Vertex(4.885396 * x, -6.139102 * x, 8.296618 * x);
    this.v_079 = new Vertex(6.163760 * x, -7.425814 * x, 9.543928 * x);
    this.v_080 = new Vertex(-12.824962 * x, 13.297322 * x, 19.250272 * x);
    this.v_081 = new Vertex(-13.077330 * x, 13.549690 * x, 20.421546 * x);
    this.v_082 = new Vertex(-12.155878 * x, 14.165370 * x, 20.846036 * x);
    this.v_083 = new Vertex(-11.175626 * x, 14.351600 * x, 20.269540 * x);
    this.v_084 = new Vertex(-10.828284 * x, 9.747220 * x, 21.355980 * x);
    this.v_085 = new Vertex(-10.922064 * x, 11.394422 * x, 18.704232 * x);
    this.v_086 = new Vertex(-10.040010 * x, 12.065794 * x, 19.159870 * x);
    this.v_087 = new Vertex(-11.593432 * x, 10.512368 * x, 19.159868 * x);
    this.v_088 = new Vertex(-11.850178 * x, 9.618924 * x, 21.749708 * x);
    this.v_089 = new Vertex(-12.661520 * x, 10.430268 * x, 19.421006 * x);
    this.v_090 = new Vertex(11.285022 * x, -11.233342 * x, 6.380968 * x);
    this.v_091 = new Vertex(9.192008 * x, -10.304348 * x, 7.171242 * x);
    this.v_092 = new Vertex(-11.325874 * x, 11.798234 * x, 23.552924 * x);
    this.v_093 = new Vertex(-10.364282 * x, 13.540256 * x, 22.598242 * x);
    this.v_094 = new Vertex(-11.512660 * x, 13.522152 * x, 22.692190 * x);
    this.v_095 = new Vertex(-12.136368 * x, 12.608728 * x, 23.122272 * x);
    this.v_096 = new Vertex(-11.699928 * x, 12.172286 * x, 18.466326 * x);
    this.v_097 = new Vertex(-9.957906 * x, 13.133880 * x, 19.421008 * x);
    this.v_098 = new Vertex(-0.856586 * x, 4.240840 * x, 16.405770 * x);
    this.v_099 = new Vertex(7.151404 * x, -8.489318 * x, 8.916852 * x);
    this.v_100 = new Vertex(8.518022 * x, -9.686276 * x, 5.308388 * x);
    this.v_101 = new Vertex(2.242888 * x, -1.770314 * x, 7.374950 * x);
    this.v_102 = new Vertex(6.654650 * x, -7.984362 * x, 9.243548 * x);
    this.v_103 = new Vertex(11.737790 * x, -11.265090 * x, 6.714028 * x);
    this.v_104 = new Vertex(7.831874 * x, -5.896434 * x, 9.952492 * x);
    this.v_105 = new Vertex(7.266304 * x, -6.794304 * x, 12.139142 * x);
    this.v_106 = new Vertex(1.152144 * x, -0.463550 * x, 8.636942 * x);
    this.v_107 = new Vertex(1.199164 * x, -0.725852 * x, 8.180590 * x);
    this.v_108 = new Vertex(0.556298 * x, 0.092060 * x, 9.007160 * x);
    this.v_109 = new Vertex(0.359746 * x, 0.113614 * x, 8.812990 * x);
    this.v_110 = new Vertex(6.638430 * x, -5.674386 * x, 5.023592 * x);
    this.v_111 = new Vertex(6.241100 * x, -4.023562 * x, 7.839228 * x);
    this.v_112 = new Vertex(5.543364 * x, -3.328948 * x, 8.345004 * x);
    this.v_113 = new Vertex(-0.670532 * x, 0.857934 * x, 9.930832 * x);
    this.v_114 = new Vertex(-0.002266 * x, 0.903962 * x, 9.920766 * x);
    this.v_115 = new Vertex(-0.478390 * x, 0.951794 * x, 9.444420 * x);
    this.v_116 = new Vertex(-0.785144 * x, 0.695322 * x, 10.350608 * x);
    this.v_117 = new Vertex(0.835816 * x, -0.272930 * x, 8.629946 * x);
    this.v_118 = new Vertex(0.685730 * x, -0.213364 * x, 16.335516 * x);
    this.v_119 = new Vertex(-0.946784 * x, -0.242172 * x, 11.781744 * x);
    this.v_120 = new Vertex(-3.316648 * x, 6.141320 * x, 17.570506 * x);
    this.v_121 = new Vertex(-4.313796 * x, 4.786156 * x, 18.084296 * x);
    this.v_122 = new Vertex(-5.668958 * x, 3.789010 * x, 17.570506 * x);
    this.v_123 = new Vertex(-5.486298 * x, 5.958658 * x, 14.719002 * x);
    this.v_124 = new Vertex(-4.131132 * x, 6.955804 * x, 15.232790 * x);
    this.v_125 = new Vertex(-6.483444 * x, 4.603492 * x, 15.232790 * x);
    this.v_126 = new Vertex(-6.334664 * x, 4.679026 * x, 17.974014 * x);
    this.v_127 = new Vertex(-6.169420 * x, 6.641780 * x, 15.394424 * x);
    this.v_128 = new Vertex(-4.943482 * x, 7.543842 * x, 15.859218 * x);
    this.v_129 = new Vertex(-7.071482 * x, 5.415842 * x, 15.859218 * x);
    this.v_130 = new Vertex(-4.206666 * x, 6.807024 * x, 17.974014 * x);
    this.v_131 = new Vertex(-5.108724 * x, 5.581086 * x, 18.438810 * x);
    this.v_132 = new Vertex(-10.658186 * x, 11.130546 * x, 18.520356 * x);
    this.v_133 = new Vertex(-8.968010 * x, 10.993796 * x, 21.142160 * x);
    this.v_134 = new Vertex(-11.286582 * x, 10.205518 * x, 18.946048 * x);
    this.v_135 = new Vertex(-10.521434 * x, 9.440372 * x, 21.142160 * x);
    this.v_136 = new Vertex(-9.596406 * x, 10.068768 * x, 21.567854 * x);
    this.v_137 = new Vertex(-2.711622 * x, 5.216164 * x, 19.766452 * x);
    this.v_138 = new Vertex(-3.075236 * x, 6.116926 * x, 17.951960 * x);
    this.v_139 = new Vertex(-2.537926 * x, 5.176858 * x, 19.223742 * x);
    this.v_140 = new Vertex(-2.957766 * x, 5.252950 * x, 19.360424 * x);
    this.v_141 = new Vertex(-4.734714 * x, 6.561850 * x, 17.568060 * x);
    this.v_142 = new Vertex(-6.159154 * x, 7.936492 * x, 18.711944 * x);
    this.v_143 = new Vertex(-6.617928 * x, 7.090286 * x, 19.267940 * x);
    this.v_144 = new Vertex(-5.252040 * x, 5.724402 * x, 18.027462 * x);
    this.v_145 = new Vertex(-6.089488 * x, 5.207076 * x, 17.568060 * x);
    this.v_146 = new Vertex(-5.188654 * x, 7.015790 * x, 16.265172 * x);
    this.v_147 = new Vertex(-6.026102 * x, 6.498462 * x, 15.805768 * x);
    this.v_148 = new Vertex(-6.543428 * x, 5.661014 * x, 16.265172 * x);
    this.v_149 = new Vertex(-7.464132 * x, 6.631514 * x, 18.711944 * x);
    this.v_150 = new Vertex(-8.012634 * x, 7.180016 * x, 17.137640 * x);
    this.v_151 = new Vertex(-9.069642 * x, 8.708404 * x, 19.666134 * x);
    this.v_152 = new Vertex(-8.523630 * x, 8.995990 * x, 20.037000 * x);
    this.v_153 = new Vertex(-8.600194 * x, 9.906150 * x, 18.620962 * x);
    this.v_154 = new Vertex(-9.146206 * x, 9.618566 * x, 18.250096 * x);
    this.v_155 = new Vertex(-9.433790 * x, 9.072554 * x, 18.620962 * x);
    this.v_156 = new Vertex(-6.707656 * x, 8.484992 * x, 17.137640 * x);
    this.v_157 = new Vertex(-8.236044 * x, 9.542002 * x, 19.666134 * x);
    this.v_158 = new Vertex(-7.553862 * x, 8.026220 * x, 16.581644 * x);
    this.v_159 = new Vertex(-9.812386 * x, 11.394044 * x, 19.356010 * x);
    this.v_160 = new Vertex(-9.332908 * x, 10.914568 * x, 20.732198 * x);
    this.v_161 = new Vertex(-10.921684 * x, 10.284746 * x, 19.356010 * x);
    this.v_162 = new Vertex(-10.539862 * x, 11.012222 * x, 18.859970 * x);
    this.v_163 = new Vertex(-9.714732 * x, 10.187092 * x, 21.228240 * x);
    this.v_164 = new Vertex(-10.442208 * x, 9.805270 * x, 20.732198 * x);
    this.v_165 = new Vertex(-6.283940 * x, 7.506660 * x, 19.149716 * x);
    this.v_166 = new Vertex(-5.863136 * x, 6.335496 * x, 18.705396 * x);
    this.v_167 = new Vertex(-4.893174 * x, 6.148044 * x, 17.934510 * x);
    this.v_168 = new Vertex(-5.357188 * x, 7.220260 * x, 18.161770 * x);
    this.v_169 = new Vertex(-6.778556 * x, 7.250918 * x, 16.077986 * x);
    this.v_170 = new Vertex(-7.137492 * x, 8.360212 * x, 16.699870 * x);
    this.v_171 = new Vertex(-5.893794 * x, 7.756866 * x, 16.621614 * x);
    this.v_172 = new Vertex(-5.602460 * x, 6.857334 * x, 15.898724 * x);
    this.v_173 = new Vertex(-6.421586 * x, 5.328920 * x, 16.916616 * x);
    this.v_174 = new Vertex(-5.675684 * x, 5.365534 * x, 17.934510 * x);
    this.v_175 = new Vertex(-6.335532 * x, 8.308614 * x, 17.924792 * x);
    this.v_176 = new Vertex(-4.856560 * x, 6.893946 * x, 16.916616 * x);
    this.v_177 = new Vertex(-10.822238 * x, 10.655884 * x, 18.966112 * x);
    this.v_178 = new Vertex(-9.864518 * x, 10.336878 * x, 18.683206 * x);
    this.v_179 = new Vertex(-9.358260 * x, 9.351304 * x, 18.329324 * x);
    this.v_180 = new Vertex(-10.169862 * x, 9.756024 * x, 19.078584 * x);
    this.v_181 = new Vertex(-7.836258 * x, 6.807892 * x, 17.924794 * x);
    this.v_182 = new Vertex(-7.284506 * x, 6.366156 * x, 16.621614 * x);
    this.v_183 = new Vertex(-6.747900 * x, 5.829548 * x, 18.161770 * x);
    this.v_184 = new Vertex(-9.432358 * x, 10.543430 * x, 21.122098 * x);
    this.v_185 = new Vertex(-9.204136 * x, 9.676496 * x, 20.578618 * x);
    this.v_186 = new Vertex(-8.311574 * x, 9.263254 * x, 19.957770 * x);
    this.v_187 = new Vertex(-8.898790 * x, 10.257350 * x, 20.183238 * x);
    this.v_188 = new Vertex(-7.583886 * x, 8.056246 * x, 19.656162 * x);
    this.v_189 = new Vertex(-8.790894 * x, 8.783936 * x, 19.957770 * x);
    this.v_190 = new Vertex(-8.267040 * x, 7.694524 * x, 19.194876 * x);
    this.v_191 = new Vertex(-7.034300 * x, 6.756296 * x, 19.149716 * x);
    this.v_192 = new Vertex(-7.676934 * x, 9.194170 * x, 17.889606 * x);
    this.v_193 = new Vertex(-8.355598 * x, 9.786596 * x, 19.143548 * x);
    this.v_194 = new Vertex(-7.222168 * x, 8.739402 * x, 19.194878 * x);
    this.v_195 = new Vertex(-8.721810 * x, 8.149294 * x, 17.889606 * x);
    this.v_196 = new Vertex(-8.360088 * x, 8.832448 * x, 17.428318 * x);
    this.v_197 = new Vertex(-7.887854 * x, 7.609850 * x, 16.699870 * x);
    this.v_198 = new Vertex(-6.384974 * x, 6.074822 * x, 15.898724 * x);
    this.v_199 = new Vertex(-8.878942 * x, 9.830620 * x, 18.329324 * x);
    this.v_200 = new Vertex(-10.183526 * x, 11.294598 * x, 18.966112 * x);
    this.v_201 = new Vertex(-10.766008 * x, 9.960946 * x, 20.044106 * x);
    this.v_202 = new Vertex(-9.314236 * x, 8.827960 * x, 19.143548 * x);
    this.v_203 = new Vertex(-9.784990 * x, 9.371150 * x, 20.183238 * x);
    this.v_204 = new Vertex(-10.071070 * x, 9.904718 * x, 21.122098 * x);
    this.v_205 = new Vertex(-9.488584 * x, 11.238368 * x, 20.044106 * x);
    this.v_206 = new Vertex(-9.283662 * x, 10.642224 * x, 19.078586 * x);
    this.v_207 = new Vertex(-5.503560 * x, 6.775578 * x, 18.589866 * x);
    this.v_208 = new Vertex(-6.338474 * x, 7.610494 * x, 16.193516 * x);
    this.v_209 = new Vertex(-5.521184 * x, 7.592864 * x, 17.391692 * x);
    this.v_210 = new Vertex(-10.089618 * x, 10.052416 * x, 18.768394 * x);
    this.v_211 = new Vertex(-7.120506 * x, 5.993548 * x, 17.391694 * x);
    this.v_212 = new Vertex(-8.979034 * x, 9.960960 * x, 20.493432 * x);
    this.v_213 = new Vertex(-7.918484 * x, 7.790040 * x, 19.558010 * x);
    this.v_214 = new Vertex(-7.371184 * x, 9.045150 * x, 18.542240 * x);
    this.v_215 = new Vertex(-6.303216 * x, 5.975920 * x, 18.589866 * x);
    this.v_216 = new Vertex(-8.626294 * x, 8.497850 * x, 17.526470 * x);
    this.v_217 = new Vertex(-7.317680 * x, 8.390844 * x, 19.558010 * x);
    this.v_218 = new Vertex(-7.138132 * x, 6.810832 * x, 16.193514 * x);
    this.v_219 = new Vertex(-8.025490 * x, 9.098654 * x, 17.526470 * x);
    this.v_220 = new Vertex(-10.043892 * x, 9.497122 * x, 19.630910 * x);
    this.v_221 = new Vertex(-8.572790 * x, 7.843544 * x, 18.542240 * x);
    this.v_222 = new Vertex(-9.024762 * x, 10.516252 * x, 19.630910 * x);
    this.v_223 = new Vertex(-9.488600 * x, 9.451396 * x, 20.493432 * x);
    this.v_224 = new Vertex(-9.580056 * x, 10.561980 * x, 18.768394 * x);

    this.t_001 = new Tri(this.v_065, this.v_040, this.v_039);
    this.t_002 = new Tri(this.v_009, this.v_007, this.v_006);
    this.t_003 = new Tri(this.v_005, this.v_010, this.v_006);
    this.t_004 = new Tri(this.v_038, this.v_098, this.v_037);
    this.t_005 = new Tri(this.v_016, this.v_017, this.v_018);
    this.t_006 = new Tri(this.v_010, this.v_009, this.v_006);
    this.t_007 = new Tri(this.v_028, this.v_015, this.v_027);
    this.t_008 = new Tri(this.v_076, this.v_139, this.v_098);
    this.t_009 = new Tri(this.v_055, this.v_078, this.v_079);
    this.t_010 = new Tri(this.v_048, this.v_046, this.v_047);
    this.t_011 = new Tri(this.v_109, this.v_114, this.v_108);
    this.t_012 = new Tri(this.v_003, this.v_042, this.v_041);
    this.t_013 = new Tri(this.v_035, this.v_033, this.v_034);
    this.t_014 = new Tri(this.v_043, this.v_044, this.v_045);
    this.t_015 = new Tri(this.v_066, this.v_057, this.v_133);
    this.t_016 = new Tri(this.v_079, this.v_105, this.v_056);
    this.t_017 = new Tri(this.v_003, this.v_001, this.v_002);
    this.t_018 = new Tri(this.v_042, this.v_034, this.v_046);
    this.t_019 = new Tri(this.v_021, this.v_049, this.v_022);
    this.t_020 = new Tri(this.v_096, this.v_086, this.v_085);
    this.t_021 = new Tri(this.v_029, this.v_054, this.v_030);
    this.t_022 = new Tri(this.v_002, this.v_034, this.v_042);
    this.t_023 = new Tri(this.v_069, this.v_070, this.v_020);
    this.t_024 = new Tri(this.v_052, this.v_101, this.v_049);
    this.t_025 = new Tri(this.v_062, this.v_071, this.v_055);
    this.t_026 = new Tri(this.v_029, this.v_038, this.v_037);
    this.t_027 = new Tri(this.v_018, this.v_115, this.v_109);
    this.t_028 = new Tri(this.v_004, this.v_034, this.v_001);
    this.t_029 = new Tri(this.v_055, this.v_053, this.v_054);
    this.t_030 = new Tri(this.v_068, this.v_064, this.v_067);
    this.t_031 = new Tri(this.v_069, this.v_019, this.v_007);
    this.t_032 = new Tri(this.v_061, this.v_013, this.v_048);
    this.t_033 = new Tri(this.v_043, this.v_090, this.v_103);
    this.t_034 = new Tri(this.v_174, this.v_145, this.v_126);
    this.t_035 = new Tri(this.v_018, this.v_077, this.v_119);
    this.t_036 = new Tri(this.v_167, this.v_144, this.v_131);
    this.t_037 = new Tri(this.v_007, this.v_005, this.v_006);
    this.t_038 = new Tri(this.v_094, this.v_092, this.v_093);
    this.t_039 = new Tri(this.v_082, this.v_093, this.v_083);
    this.t_040 = new Tri(this.v_083, this.v_058, this.v_097);
    this.t_041 = new Tri(this.v_026, this.v_022, this.v_025);
    this.t_042 = new Tri(this.v_014, this.v_012, this.v_013);
    this.t_043 = new Tri(this.v_073, this.v_092, this.v_095);
    this.t_044 = new Tri(this.v_074, this.v_072, this.v_073);
    this.t_045 = new Tri(this.v_010, this.v_090, this.v_091);
    this.t_046 = new Tri(this.v_059, this.v_084, this.v_060);
    this.t_047 = new Tri(this.v_046, this.v_032, this.v_047);
    this.t_048 = new Tri(this.v_089, this.v_084, this.v_088);
    this.t_049 = new Tri(this.v_096, this.v_087, this.v_089);
    this.t_050 = new Tri(this.v_080, this.v_089, this.v_075);
    this.t_051 = new Tri(this.v_031, this.v_101, this.v_107);
    this.t_052 = new Tri(this.v_092, this.v_088, this.v_059);
    this.t_053 = new Tri(this.v_085, this.v_066, this.v_132);
    this.t_054 = new Tri(this.v_075, this.v_088, this.v_072);
    this.t_055 = new Tri(this.v_015, this.v_024, this.v_012);
    this.t_056 = new Tri(this.v_058, this.v_086, this.v_097);
    this.t_057 = new Tri(this.v_029, this.v_063, this.v_118);
    this.t_058 = new Tri(this.v_026, this.v_044, this.v_043);
    this.t_059 = new Tri(this.v_060, this.v_135, this.v_136);
    this.t_060 = new Tri(this.v_020, this.v_051, this.v_021);
    this.t_061 = new Tri(this.v_052, this.v_091, this.v_099);
    this.t_062 = new Tri(this.v_045, this.v_091, this.v_043);
    this.t_063 = new Tri(this.v_021, this.v_051, this.v_050);
    this.t_064 = new Tri(this.v_062, this.v_014, this.v_061);
    this.t_065 = new Tri(this.v_011, this.v_069, this.v_009);
    this.t_066 = new Tri(this.v_045, this.v_078, this.v_102);
    this.t_067 = new Tri(this.v_078, this.v_045, this.v_079);
    this.t_068 = new Tri(this.v_090, this.v_008, this.v_103);
    this.t_069 = new Tri(this.v_008, this.v_090, this.v_005);
    this.t_070 = new Tri(this.v_104, this.v_056, this.v_105);
    this.t_071 = new Tri(this.v_056, this.v_104, this.v_053);
    this.t_072 = new Tri(this.v_017, this.v_106, this.v_107);
    this.t_073 = new Tri(this.v_108, this.v_018, this.v_109);
    this.t_074 = new Tri(this.v_011, this.v_100, this.v_070);
    this.t_075 = new Tri(this.v_012, this.v_041, this.v_042);
    this.t_076 = new Tri(this.v_110, this.v_030, this.v_111);
    this.t_077 = new Tri(this.v_030, this.v_110, this.v_112);
    this.t_078 = new Tri(this.v_113, this.v_114, this.v_115);
    this.t_079 = new Tri(this.v_114, this.v_113, this.v_047);
    this.t_080 = new Tri(this.v_119, this.v_062, this.v_116);
    this.t_081 = new Tri(this.v_016, this.v_108, this.v_117);
    this.t_082 = new Tri(this.v_063, this.v_015, this.v_014);
    this.t_083 = new Tri(this.v_116, this.v_018, this.v_119);
    this.t_084 = new Tri(this.v_118, this.v_063, this.v_062);
    this.t_085 = new Tri(this.v_030, this.v_032, this.v_029);
    this.t_086 = new Tri(this.v_080, this.v_097, this.v_096);
    this.t_087 = new Tri(this.v_045, this.v_102, this.v_099);
    this.t_088 = new Tri(this.v_045, this.v_044, this.v_105);
    this.t_089 = new Tri(this.v_030, this.v_112, this.v_031);
    this.t_090 = new Tri(this.v_030, this.v_053, this.v_104);
    this.t_091 = new Tri(this.v_032, this.v_114, this.v_047);
    this.t_092 = new Tri(this.v_036, this.v_098, this.v_033);
    this.t_093 = new Tri(this.v_026, this.v_043, this.v_103);
    this.t_094 = new Tri(this.v_103, this.v_008, this.v_026);
    this.t_095 = new Tri(this.v_025, this.v_111, this.v_030);
    this.t_096 = new Tri(this.v_106, this.v_117, this.v_108);
    this.t_097 = new Tri(this.v_110, this.v_111, this.v_022);
    this.t_098 = new Tri(this.v_110, this.v_022, this.v_049);
    this.t_099 = new Tri(this.v_079, this.v_056, this.v_055);
    this.t_100 = new Tri(this.v_044, this.v_104, this.v_105);
    this.t_101 = new Tri(this.v_068, this.v_028, this.v_040);
    this.t_102 = new Tri(this.v_021, this.v_019, this.v_020);
    this.t_103 = new Tri(this.v_063, this.v_098, this.v_064);
    this.t_104 = new Tri(this.v_051, this.v_049, this.v_050);
    this.t_105 = new Tri(this.v_087, this.v_135, this.v_084);
    this.t_106 = new Tri(this.v_064, this.v_027, this.v_063);
    this.t_107 = new Tri(this.v_033, this.v_046, this.v_034);
    this.t_108 = new Tri(this.v_007, this.v_019, this.v_026);
    this.t_109 = new Tri(this.v_114, this.v_106, this.v_108);
    this.t_110 = new Tri(this.v_082, this.v_080, this.v_081);
    this.t_111 = new Tri(this.v_025, this.v_030, this.v_104);
    this.t_112 = new Tri(this.v_164, this.v_204, this.v_135);
    this.t_113 = new Tri(this.v_073, this.v_095, this.v_094);
    this.t_114 = new Tri(this.v_082, this.v_081, this.v_074);
    this.t_115 = new Tri(this.v_114, this.v_032, this.v_031);
    this.t_116 = new Tri(this.v_052, this.v_102, this.v_078);
    this.t_117 = new Tri(this.v_092, this.v_058, this.v_093);
    this.t_118 = new Tri(this.v_062, this.v_048, this.v_116);
    this.t_119 = new Tri(this.v_112, this.v_110, this.v_101);
    this.t_120 = new Tri(this.v_101, this.v_017, this.v_107);
    this.t_121 = new Tri(this.v_077, this.v_052, this.v_078);
    this.t_122 = new Tri(this.v_054, this.v_062, this.v_055);
    this.t_123 = new Tri(this.v_046, this.v_012, this.v_042);
    this.t_124 = new Tri(this.v_016, this.v_106, this.v_017);
    this.t_125 = new Tri(this.v_074, this.v_080, this.v_075);
    this.t_126 = new Tri(this.v_039, this.v_064, this.v_065);
    this.t_127 = new Tri(this.v_055, this.v_119, this.v_077);
    this.t_128 = new Tri(this.v_100, this.v_051, this.v_070);
    this.t_129 = new Tri(this.v_031, this.v_107, this.v_106);
    this.t_130 = new Tri(this.v_003, this.v_035, this.v_004);
    this.t_131 = new Tri(this.v_047, this.v_116, this.v_048);
    this.t_132 = new Tri(this.v_082, this.v_073, this.v_094);
    this.t_133 = new Tri(this.v_121, this.v_130, this.v_131);
    this.t_134 = new Tri(this.v_130, this.v_124, this.v_128);
    this.t_135 = new Tri(this.v_123, this.v_129, this.v_127);
    this.t_136 = new Tri(this.v_160, this.v_205, this.v_133);
    this.t_137 = new Tri(this.v_173, this.v_148, this.v_129);
    this.t_138 = new Tri(this.v_130, this.v_176, this.v_141);
    this.t_139 = new Tri(this.v_121, this.v_126, this.v_122);
    this.t_140 = new Tri(this.v_125, this.v_126, this.v_129);
    this.t_141 = new Tri(this.v_123, this.v_128, this.v_124);
    this.t_142 = new Tri(this.v_060, this.v_133, this.v_057);
    this.t_143 = new Tri(this.v_085, this.v_134, this.v_087);
    this.t_144 = new Tri(this.v_177, this.v_161, this.v_134);
    this.t_145 = new Tri(this.v_201, this.v_164, this.v_135);
    this.t_146 = new Tri(this.v_134, this.v_161, this.v_201);
    this.t_147 = new Tri(this.v_163, this.v_184, this.v_136);
    this.t_148 = new Tri(this.v_123, this.v_035, this.v_041);
    this.t_149 = new Tri(this.v_140, this.v_028, this.v_137);
    this.t_150 = new Tri(this.v_125, this.v_023, this.v_122);
    this.t_151 = new Tri(this.v_008, this.v_007, this.v_026);
    this.t_152 = new Tri(this.v_100, this.v_010, this.v_091);
    this.t_153 = new Tri(this.v_140, this.v_137, this.v_139);
    this.t_154 = new Tri(this.v_138, this.v_140, this.v_139);
    this.t_155 = new Tri(this.v_064, this.v_098, this.v_139);
    this.t_156 = new Tri(this.v_067, this.v_139, this.v_137);
    this.t_157 = new Tri(this.v_023, this.v_121, this.v_122);
    this.t_158 = new Tri(this.v_138, this.v_076, this.v_120);
    this.t_159 = new Tri(this.v_076, this.v_124, this.v_120);
    this.t_160 = new Tri(this.v_036, this.v_123, this.v_124);
    this.t_161 = new Tri(this.v_123, this.v_024, this.v_125);
    this.t_162 = new Tri(this.v_067, this.v_137, this.v_028);
    this.t_163 = new Tri(this.v_138, this.v_121, this.v_140);
    this.t_164 = new Tri(this.v_110, this.v_049, this.v_101);
    this.t_165 = new Tri(this.v_040, this.v_027, this.v_039);
    this.t_166 = new Tri(this.v_059, this.v_057, this.v_058);
    this.t_167 = new Tri(this.v_142, this.v_207, this.v_168);
    this.t_168 = new Tri(this.v_165, this.v_166, this.v_207);
    this.t_169 = new Tri(this.v_207, this.v_144, this.v_167);
    this.t_170 = new Tri(this.v_168, this.v_167, this.v_141);
    this.t_171 = new Tri(this.v_147, this.v_208, this.v_172);
    this.t_172 = new Tri(this.v_169, this.v_170, this.v_208);
    this.t_173 = new Tri(this.v_208, this.v_156, this.v_171);
    this.t_174 = new Tri(this.v_172, this.v_171, this.v_146);
    this.t_175 = new Tri(this.v_146, this.v_209, this.v_176);
    this.t_176 = new Tri(this.v_171, this.v_175, this.v_209);
    this.t_177 = new Tri(this.v_175, this.v_168, this.v_209);
    this.t_178 = new Tri(this.v_209, this.v_141, this.v_176);
    this.t_179 = new Tri(this.v_161, this.v_210, this.v_180);
    this.t_180 = new Tri(this.v_177, this.v_178, this.v_210);
    this.t_181 = new Tri(this.v_210, this.v_154, this.v_179);
    this.t_182 = new Tri(this.v_180, this.v_179, this.v_155);
    this.t_183 = new Tri(this.v_181, this.v_183, this.v_149);
    this.t_184 = new Tri(this.v_181, this.v_182, this.v_211);
    this.t_185 = new Tri(this.v_211, this.v_148, this.v_173);
    this.t_186 = new Tri(this.v_211, this.v_145, this.v_183);
    this.t_187 = new Tri(this.v_160, this.v_212, this.v_187);
    this.t_188 = new Tri(this.v_184, this.v_185, this.v_212);
    this.t_189 = new Tri(this.v_212, this.v_152, this.v_186);
    this.t_190 = new Tri(this.v_187, this.v_186, this.v_157);
    this.t_191 = new Tri(this.v_188, this.v_191, this.v_143);
    this.t_192 = new Tri(this.v_152, this.v_213, this.v_188);
    this.t_193 = new Tri(this.v_189, this.v_190, this.v_213);
    this.t_194 = new Tri(this.v_213, this.v_149, this.v_191);
    this.t_195 = new Tri(this.v_192, this.v_175, this.v_156);
    this.t_196 = new Tri(this.v_153, this.v_214, this.v_192);
    this.t_197 = new Tri(this.v_214, this.v_157, this.v_194);
    this.t_198 = new Tri(this.v_175, this.v_194, this.v_142);
    this.t_199 = new Tri(this.v_144, this.v_215, this.v_174);
    this.t_200 = new Tri(this.v_166, this.v_191, this.v_215);
    this.t_201 = new Tri(this.v_215, this.v_149, this.v_183);
    this.t_202 = new Tri(this.v_174, this.v_183, this.v_145);
    this.t_203 = new Tri(this.v_150, this.v_216, this.v_197);
    this.t_204 = new Tri(this.v_195, this.v_179, this.v_216);
    this.t_205 = new Tri(this.v_216, this.v_154, this.v_196);
    this.t_206 = new Tri(this.v_197, this.v_196, this.v_158);
    this.t_207 = new Tri(this.v_186, this.v_194, this.v_157);
    this.t_208 = new Tri(this.v_152, this.v_217, this.v_186);
    this.t_209 = new Tri(this.v_188, this.v_165, this.v_217);
    this.t_210 = new Tri(this.v_217, this.v_142, this.v_194);
    this.t_211 = new Tri(this.v_150, this.v_218, this.v_182);
    this.t_212 = new Tri(this.v_197, this.v_169, this.v_218);
    this.t_213 = new Tri(this.v_218, this.v_147, this.v_198);
    this.t_214 = new Tri(this.v_182, this.v_198, this.v_148);
    this.t_215 = new Tri(this.v_154, this.v_219, this.v_196);
    this.t_216 = new Tri(this.v_199, this.v_192, this.v_219);
    this.t_217 = new Tri(this.v_219, this.v_156, this.v_170);
    this.t_218 = new Tri(this.v_196, this.v_170, this.v_158);
    this.t_219 = new Tri(this.v_201, this.v_203, this.v_164);
    this.t_220 = new Tri(this.v_201, this.v_180, this.v_220);
    this.t_221 = new Tri(this.v_220, this.v_155, this.v_202);
    this.t_222 = new Tri(this.v_220, this.v_151, this.v_203);
    this.t_223 = new Tri(this.v_151, this.v_221, this.v_190);
    this.t_224 = new Tri(this.v_155, this.v_221, this.v_202);
    this.t_225 = new Tri(this.v_195, this.v_181, this.v_221);
    this.t_226 = new Tri(this.v_190, this.v_181, this.v_149);
    this.t_227 = new Tri(this.v_153, this.v_222, this.v_193);
    this.t_228 = new Tri(this.v_206, this.v_205, this.v_222);
    this.t_229 = new Tri(this.v_205, this.v_187, this.v_222);
    this.t_230 = new Tri(this.v_222, this.v_157, this.v_193);
    this.t_231 = new Tri(this.v_152, this.v_223, this.v_189);
    this.t_232 = new Tri(this.v_185, this.v_204, this.v_223);
    this.t_233 = new Tri(this.v_223, this.v_164, this.v_203);
    this.t_234 = new Tri(this.v_189, this.v_203, this.v_151);
    this.t_235 = new Tri(this.v_154, this.v_224, this.v_199);
    this.t_236 = new Tri(this.v_178, this.v_200, this.v_224);
    this.t_237 = new Tri(this.v_224, this.v_159, this.v_206);
    this.t_238 = new Tri(this.v_199, this.v_206, this.v_153);
    this.t_239 = new Tri(this.v_144, this.v_174, this.v_131);
    this.t_240 = new Tri(this.v_130, this.v_128, this.v_176);
    this.t_241 = new Tri(this.v_146, this.v_176, this.v_128);
    this.t_242 = new Tri(this.v_131, this.v_130, this.v_167);
    this.t_243 = new Tri(this.v_145, this.v_173, this.v_126);
    this.t_244 = new Tri(this.v_126, this.v_131, this.v_174);
    this.t_245 = new Tri(this.v_148, this.v_198, this.v_129);
    this.t_246 = new Tri(this.v_129, this.v_126, this.v_173);
    this.t_247 = new Tri(this.v_198, this.v_147, this.v_127);
    this.t_248 = new Tri(this.v_127, this.v_129, this.v_198);
    this.t_249 = new Tri(this.v_147, this.v_172, this.v_127);
    this.t_250 = new Tri(this.v_128, this.v_127, this.v_172);
    this.t_251 = new Tri(this.v_128, this.v_172, this.v_146);
    this.t_252 = new Tri(this.v_141, this.v_167, this.v_130);
    this.t_253 = new Tri(this.v_184, this.v_160, this.v_133);
    this.t_254 = new Tri(this.v_135, this.v_134, this.v_201);
    this.t_255 = new Tri(this.v_136, this.v_135, this.v_204);
    this.t_256 = new Tri(this.v_205, this.v_159, this.v_066);
    this.t_257 = new Tri(this.v_133, this.v_136, this.v_184);
    this.t_258 = new Tri(this.v_200, this.v_162, this.v_132);
    this.t_259 = new Tri(this.v_066, this.v_133, this.v_205);
    this.t_260 = new Tri(this.v_162, this.v_177, this.v_132);
    this.t_261 = new Tri(this.v_132, this.v_066, this.v_200);
    this.t_262 = new Tri(this.v_204, this.v_163, this.v_136);
    this.t_263 = new Tri(this.v_134, this.v_132, this.v_177);
    this.t_264 = new Tri(this.v_159, this.v_200, this.v_066);
    this.t_265 = new Tri(this.v_065, this.v_068, this.v_040);
    this.t_266 = new Tri(this.v_009, this.v_069, this.v_007);
    this.t_267 = new Tri(this.v_005, this.v_090, this.v_010);
    this.t_268 = new Tri(this.v_038, this.v_033, this.v_098);
    this.t_269 = new Tri(this.v_010, this.v_011, this.v_009);
    this.t_270 = new Tri(this.v_028, this.v_023, this.v_015);
    this.t_271 = new Tri(this.v_076, this.v_138, this.v_139);
    this.t_272 = new Tri(this.v_055, this.v_077, this.v_078);
    this.t_273 = new Tri(this.v_048, this.v_013, this.v_046);
    this.t_274 = new Tri(this.v_109, this.v_115, this.v_114);
    this.t_275 = new Tri(this.v_003, this.v_002, this.v_042);
    this.t_276 = new Tri(this.v_035, this.v_036, this.v_033);
    this.t_277 = new Tri(this.v_066, this.v_086, this.v_057);
    this.t_278 = new Tri(this.v_079, this.v_045, this.v_105);
    this.t_279 = new Tri(this.v_003, this.v_004, this.v_001);
    this.t_280 = new Tri(this.v_021, this.v_050, this.v_049);
    this.t_281 = new Tri(this.v_096, this.v_097, this.v_086);
    this.t_282 = new Tri(this.v_029, this.v_118, this.v_054);
    this.t_283 = new Tri(this.v_002, this.v_001, this.v_034);
    this.t_284 = new Tri(this.v_069, this.v_011, this.v_070);
    this.t_285 = new Tri(this.v_052, this.v_077, this.v_101);
    this.t_286 = new Tri(this.v_029, this.v_032, this.v_038);
    this.t_287 = new Tri(this.v_018, this.v_113, this.v_115);
    this.t_288 = new Tri(this.v_004, this.v_035, this.v_034);
    this.t_289 = new Tri(this.v_055, this.v_056, this.v_053);
    this.t_290 = new Tri(this.v_068, this.v_065, this.v_064);
    this.t_291 = new Tri(this.v_069, this.v_020, this.v_019);
    this.t_292 = new Tri(this.v_061, this.v_014, this.v_013);
    this.t_293 = new Tri(this.v_043, this.v_091, this.v_090);
    this.t_294 = new Tri(this.v_018, this.v_017, this.v_077);
    this.t_295 = new Tri(this.v_007, this.v_008, this.v_005);
    this.t_296 = new Tri(this.v_094, this.v_095, this.v_092);
    this.t_297 = new Tri(this.v_082, this.v_094, this.v_093);
    this.t_298 = new Tri(this.v_083, this.v_093, this.v_058);
    this.t_299 = new Tri(this.v_026, this.v_019, this.v_022);
    this.t_300 = new Tri(this.v_014, this.v_015, this.v_012);
    this.t_301 = new Tri(this.v_073, this.v_072, this.v_092);
    this.t_302 = new Tri(this.v_074, this.v_075, this.v_072);
    this.t_303 = new Tri(this.v_059, this.v_088, this.v_084);
    this.t_304 = new Tri(this.v_046, this.v_038, this.v_032);
    this.t_305 = new Tri(this.v_089, this.v_087, this.v_084);
    this.t_306 = new Tri(this.v_096, this.v_085, this.v_087);
    this.t_307 = new Tri(this.v_080, this.v_096, this.v_089);
    this.t_308 = new Tri(this.v_031, this.v_112, this.v_101);
    this.t_309 = new Tri(this.v_092, this.v_072, this.v_088);
    this.t_310 = new Tri(this.v_085, this.v_086, this.v_066);
    this.t_311 = new Tri(this.v_075, this.v_089, this.v_088);
    this.t_312 = new Tri(this.v_015, this.v_023, this.v_024);
    this.t_313 = new Tri(this.v_058, this.v_057, this.v_086);
    this.t_314 = new Tri(this.v_029, this.v_037, this.v_063);
    this.t_315 = new Tri(this.v_026, this.v_025, this.v_044);
    this.t_316 = new Tri(this.v_060, this.v_084, this.v_135);
    this.t_317 = new Tri(this.v_020, this.v_070, this.v_051);
    this.t_318 = new Tri(this.v_052, this.v_100, this.v_091);
    this.t_319 = new Tri(this.v_045, this.v_099, this.v_091);
    this.t_320 = new Tri(this.v_062, this.v_063, this.v_014);
    this.t_321 = new Tri(this.v_011, this.v_010, this.v_100);
    this.t_322 = new Tri(this.v_012, this.v_024, this.v_041);
    this.t_323 = new Tri(this.v_119, this.v_071, this.v_062);
    this.t_324 = new Tri(this.v_016, this.v_018, this.v_108);
    this.t_325 = new Tri(this.v_063, this.v_027, this.v_015);
    this.t_326 = new Tri(this.v_116, this.v_113, this.v_018);
    this.t_327 = new Tri(this.v_030, this.v_031, this.v_032);
    this.t_328 = new Tri(this.v_080, this.v_083, this.v_097);
    this.t_329 = new Tri(this.v_030, this.v_054, this.v_053);
    this.t_330 = new Tri(this.v_036, this.v_076, this.v_098);
    this.t_331 = new Tri(this.v_025, this.v_022, this.v_111);
    this.t_332 = new Tri(this.v_044, this.v_025, this.v_104);
    this.t_333 = new Tri(this.v_068, this.v_067, this.v_028);
    this.t_334 = new Tri(this.v_021, this.v_022, this.v_019);
    this.t_335 = new Tri(this.v_063, this.v_037, this.v_098);
    this.t_336 = new Tri(this.v_051, this.v_052, this.v_049);
    this.t_337 = new Tri(this.v_087, this.v_134, this.v_135);
    this.t_338 = new Tri(this.v_033, this.v_038, this.v_046);
    this.t_339 = new Tri(this.v_114, this.v_031, this.v_106);
    this.t_340 = new Tri(this.v_082, this.v_083, this.v_080);
    this.t_341 = new Tri(this.v_052, this.v_099, this.v_102);
    this.t_342 = new Tri(this.v_092, this.v_059, this.v_058);
    this.t_343 = new Tri(this.v_062, this.v_061, this.v_048);
    this.t_344 = new Tri(this.v_101, this.v_077, this.v_017);
    this.t_345 = new Tri(this.v_054, this.v_118, this.v_062);
    this.t_346 = new Tri(this.v_046, this.v_013, this.v_012);
    this.t_347 = new Tri(this.v_016, this.v_117, this.v_106);
    this.t_348 = new Tri(this.v_074, this.v_081, this.v_080);
    this.t_349 = new Tri(this.v_039, this.v_027, this.v_064);
    this.t_350 = new Tri(this.v_055, this.v_071, this.v_119);
    this.t_351 = new Tri(this.v_100, this.v_052, this.v_051);
    this.t_352 = new Tri(this.v_003, this.v_041, this.v_035);
    this.t_353 = new Tri(this.v_047, this.v_113, this.v_116);
    this.t_354 = new Tri(this.v_082, this.v_074, this.v_073);
    this.t_355 = new Tri(this.v_121, this.v_120, this.v_130);
    this.t_356 = new Tri(this.v_130, this.v_120, this.v_124);
    this.t_357 = new Tri(this.v_123, this.v_125, this.v_129);
    this.t_358 = new Tri(this.v_121, this.v_131, this.v_126);
    this.t_359 = new Tri(this.v_125, this.v_122, this.v_126);
    this.t_360 = new Tri(this.v_123, this.v_127, this.v_128);
    this.t_361 = new Tri(this.v_060, this.v_136, this.v_133);
    this.t_362 = new Tri(this.v_085, this.v_132, this.v_134);
    this.t_363 = new Tri(this.v_140, this.v_023, this.v_028);
    this.t_364 = new Tri(this.v_125, this.v_024, this.v_023);
    this.t_365 = new Tri(this.v_067, this.v_064, this.v_139);
    this.t_366 = new Tri(this.v_023, this.v_140, this.v_121);
    this.t_367 = new Tri(this.v_076, this.v_036, this.v_124);
    this.t_368 = new Tri(this.v_036, this.v_035, this.v_123);
    this.t_369 = new Tri(this.v_123, this.v_041, this.v_024);
    this.t_370 = new Tri(this.v_138, this.v_120, this.v_121);
    this.t_371 = new Tri(this.v_040, this.v_028, this.v_027);
    this.t_372 = new Tri(this.v_059, this.v_060, this.v_057);
    this.t_373 = new Tri(this.v_142, this.v_165, this.v_207);
    this.t_374 = new Tri(this.v_165, this.v_143, this.v_166);
    this.t_375 = new Tri(this.v_207, this.v_166, this.v_144);
    this.t_376 = new Tri(this.v_168, this.v_207, this.v_167);
    this.t_377 = new Tri(this.v_147, this.v_169, this.v_208);
    this.t_378 = new Tri(this.v_169, this.v_158, this.v_170);
    this.t_379 = new Tri(this.v_208, this.v_170, this.v_156);
    this.t_380 = new Tri(this.v_172, this.v_208, this.v_171);
    this.t_381 = new Tri(this.v_146, this.v_171, this.v_209);
    this.t_382 = new Tri(this.v_171, this.v_156, this.v_175);
    this.t_383 = new Tri(this.v_175, this.v_142, this.v_168);
    this.t_384 = new Tri(this.v_209, this.v_168, this.v_141);
    this.t_385 = new Tri(this.v_161, this.v_177, this.v_210);
    this.t_386 = new Tri(this.v_177, this.v_162, this.v_178);
    this.t_387 = new Tri(this.v_210, this.v_178, this.v_154);
    this.t_388 = new Tri(this.v_180, this.v_210, this.v_179);
    this.t_389 = new Tri(this.v_181, this.v_211, this.v_183);
    this.t_390 = new Tri(this.v_181, this.v_150, this.v_182);
    this.t_391 = new Tri(this.v_211, this.v_182, this.v_148);
    this.t_392 = new Tri(this.v_211, this.v_173, this.v_145);
    this.t_393 = new Tri(this.v_160, this.v_184, this.v_212);
    this.t_394 = new Tri(this.v_184, this.v_163, this.v_185);
    this.t_395 = new Tri(this.v_212, this.v_185, this.v_152);
    this.t_396 = new Tri(this.v_187, this.v_212, this.v_186);
    this.t_397 = new Tri(this.v_188, this.v_213, this.v_191);
    this.t_398 = new Tri(this.v_152, this.v_189, this.v_213);
    this.t_399 = new Tri(this.v_189, this.v_151, this.v_190);
    this.t_400 = new Tri(this.v_213, this.v_190, this.v_149);
    this.t_401 = new Tri(this.v_192, this.v_214, this.v_175);
    this.t_402 = new Tri(this.v_153, this.v_193, this.v_214);
    this.t_403 = new Tri(this.v_214, this.v_193, this.v_157);
    this.t_404 = new Tri(this.v_175, this.v_214, this.v_194);
    this.t_405 = new Tri(this.v_144, this.v_166, this.v_215);
    this.t_406 = new Tri(this.v_166, this.v_143, this.v_191);
    this.t_407 = new Tri(this.v_215, this.v_191, this.v_149);
    this.t_408 = new Tri(this.v_174, this.v_215, this.v_183);
    this.t_409 = new Tri(this.v_150, this.v_195, this.v_216);
    this.t_410 = new Tri(this.v_195, this.v_155, this.v_179);
    this.t_411 = new Tri(this.v_216, this.v_179, this.v_154);
    this.t_412 = new Tri(this.v_197, this.v_216, this.v_196);
    this.t_413 = new Tri(this.v_186, this.v_217, this.v_194);
    this.t_414 = new Tri(this.v_152, this.v_188, this.v_217);
    this.t_415 = new Tri(this.v_188, this.v_143, this.v_165);
    this.t_416 = new Tri(this.v_217, this.v_165, this.v_142);
    this.t_417 = new Tri(this.v_150, this.v_197, this.v_218);
    this.t_418 = new Tri(this.v_197, this.v_158, this.v_169);
    this.t_419 = new Tri(this.v_218, this.v_169, this.v_147);
    this.t_420 = new Tri(this.v_182, this.v_218, this.v_198);
    this.t_421 = new Tri(this.v_154, this.v_199, this.v_219);
    this.t_422 = new Tri(this.v_199, this.v_153, this.v_192);
    this.t_423 = new Tri(this.v_219, this.v_192, this.v_156);
    this.t_424 = new Tri(this.v_196, this.v_219, this.v_170);
    this.t_425 = new Tri(this.v_201, this.v_220, this.v_203);
    this.t_426 = new Tri(this.v_201, this.v_161, this.v_180);
    this.t_427 = new Tri(this.v_220, this.v_180, this.v_155);
    this.t_428 = new Tri(this.v_220, this.v_202, this.v_151);
    this.t_429 = new Tri(this.v_151, this.v_202, this.v_221);
    this.t_430 = new Tri(this.v_155, this.v_195, this.v_221);
    this.t_431 = new Tri(this.v_195, this.v_150, this.v_181);
    this.t_432 = new Tri(this.v_190, this.v_221, this.v_181);
    this.t_433 = new Tri(this.v_153, this.v_206, this.v_222);
    this.t_434 = new Tri(this.v_206, this.v_159, this.v_205);
    this.t_435 = new Tri(this.v_205, this.v_160, this.v_187);
    this.t_436 = new Tri(this.v_222, this.v_187, this.v_157);
    this.t_437 = new Tri(this.v_152, this.v_185, this.v_223);
    this.t_438 = new Tri(this.v_185, this.v_163, this.v_204);
    this.t_439 = new Tri(this.v_223, this.v_204, this.v_164);
    this.t_440 = new Tri(this.v_189, this.v_223, this.v_203);
    this.t_441 = new Tri(this.v_154, this.v_178, this.v_224);
    this.t_442 = new Tri(this.v_178, this.v_162, this.v_200);
    this.t_443 = new Tri(this.v_224, this.v_200, this.v_159);
    this.t_444 = new Tri(this.v_199, this.v_224, this.v_206);

    this.tris = [
      this.t_001, this.t_002, this.t_003, this.t_004, this.t_005, this.t_006, this.t_007, this.t_008, this.t_009, this.t_010,
      this.t_011, this.t_012, this.t_013, this.t_014, this.t_015, this.t_016, this.t_017, this.t_018, this.t_019, this.t_020,
      this.t_021, this.t_022, this.t_023, this.t_024, this.t_025, this.t_026, this.t_027, this.t_028, this.t_029, this.t_030,
      this.t_031, this.t_032, this.t_033, this.t_034, this.t_035, this.t_036, this.t_037, this.t_038, this.t_039, this.t_040,
      this.t_041, this.t_042, this.t_043, this.t_044, this.t_045, this.t_046, this.t_047, this.t_048, this.t_049, this.t_050,
      this.t_051, this.t_052, this.t_053, this.t_054, this.t_055, this.t_056, this.t_057, this.t_058, this.t_059, this.t_060,
      this.t_061, this.t_062, this.t_063, this.t_064, this.t_065, this.t_066, this.t_067, this.t_068, this.t_069, this.t_070,
      this.t_071, this.t_072, this.t_073, this.t_074, this.t_075, this.t_076, this.t_077, this.t_078, this.t_079, this.t_080,
      this.t_081, this.t_082, this.t_083, this.t_084, this.t_085, this.t_086, this.t_087, this.t_088, this.t_089, this.t_090,
      this.t_091, this.t_092, this.t_093, this.t_094, this.t_095, this.t_096, this.t_097, this.t_098, this.t_099, this.t_100,
      this.t_101, this.t_102, this.t_103, this.t_104, this.t_105, this.t_106, this.t_107, this.t_108, this.t_109, this.t_110,
      this.t_111, this.t_112, this.t_113, this.t_114, this.t_115, this.t_116, this.t_117, this.t_118, this.t_119, this.t_120,
      this.t_121, this.t_122, this.t_123, this.t_124, this.t_125, this.t_126, this.t_127, this.t_128, this.t_129, this.t_130,
      this.t_131, this.t_132, this.t_133, this.t_134, this.t_135, this.t_136, this.t_137, this.t_138, this.t_139, this.t_140,
      this.t_141, this.t_142, this.t_143, this.t_144, this.t_145, this.t_146, this.t_147, this.t_148, this.t_149, this.t_150,
      this.t_151, this.t_152, this.t_153, this.t_154, this.t_155, this.t_156, this.t_157, this.t_158, this.t_159, this.t_160,
      this.t_161, this.t_162, this.t_163, this.t_164, this.t_165, this.t_166, this.t_167, this.t_168, this.t_169, this.t_170,
      this.t_171, this.t_172, this.t_173, this.t_174, this.t_175, this.t_176, this.t_177, this.t_178, this.t_179, this.t_180,
      this.t_181, this.t_182, this.t_183, this.t_184, this.t_185, this.t_186, this.t_187, this.t_188, this.t_189, this.t_190,
      this.t_191, this.t_192, this.t_193, this.t_194, this.t_195, this.t_196, this.t_197, this.t_198, this.t_199, this.t_200,
      this.t_201, this.t_202, this.t_203, this.t_204, this.t_205, this.t_206, this.t_207, this.t_208, this.t_209, this.t_210,
      this.t_211, this.t_212, this.t_213, this.t_214, this.t_215, this.t_216, this.t_217, this.t_218, this.t_219, this.t_220,
      this.t_221, this.t_222, this.t_223, this.t_224, this.t_225, this.t_226, this.t_227, this.t_228, this.t_229, this.t_230,
      this.t_231, this.t_232, this.t_233, this.t_234, this.t_235, this.t_236, this.t_237, this.t_238, this.t_239, this.t_240,
      this.t_241, this.t_242, this.t_243, this.t_244, this.t_245, this.t_246, this.t_247, this.t_248, this.t_249, this.t_250,
      this.t_251, this.t_252, this.t_253, this.t_254, this.t_255, this.t_256, this.t_257, this.t_258, this.t_259, this.t_260,
      this.t_261, this.t_262, this.t_263, this.t_264, this.t_265, this.t_266, this.t_267, this.t_268, this.t_269, this.t_270,
      this.t_271, this.t_272, this.t_273, this.t_274, this.t_275, this.t_276, this.t_277, this.t_278, this.t_279, this.t_280,
      this.t_281, this.t_282, this.t_283, this.t_284, this.t_285, this.t_286, this.t_287, this.t_288, this.t_289, this.t_290,
      this.t_291, this.t_292, this.t_293, this.t_294, this.t_295, this.t_296, this.t_297, this.t_298, this.t_299, this.t_300,
      this.t_301, this.t_302, this.t_303, this.t_304, this.t_305, this.t_306, this.t_307, this.t_308, this.t_309, this.t_310,
      this.t_311, this.t_312, this.t_313, this.t_314, this.t_315, this.t_316, this.t_317, this.t_318, this.t_319, this.t_320,
      this.t_321, this.t_322, this.t_323, this.t_324, this.t_325, this.t_326, this.t_327, this.t_328, this.t_329, this.t_330,
      this.t_331, this.t_332, this.t_333, this.t_334, this.t_335, this.t_336, this.t_337, this.t_338, this.t_339, this.t_340,
      this.t_341, this.t_342, this.t_343, this.t_344, this.t_345, this.t_346, this.t_347, this.t_348, this.t_349, this.t_350,
      this.t_351, this.t_352, this.t_353, this.t_354, this.t_355, this.t_356, this.t_357, this.t_358, this.t_359, this.t_360,
      this.t_361, this.t_362, this.t_363, this.t_364, this.t_365, this.t_366, this.t_367, this.t_368, this.t_369, this.t_370,
      this.t_371, this.t_372, this.t_373, this.t_374, this.t_375, this.t_376, this.t_377, this.t_378, this.t_379, this.t_380,
      this.t_381, this.t_382, this.t_383, this.t_384, this.t_385, this.t_386, this.t_387, this.t_388, this.t_389, this.t_390,
      this.t_391, this.t_392, this.t_393, this.t_394, this.t_395, this.t_396, this.t_397, this.t_398, this.t_399, this.t_400,
      this.t_401, this.t_402, this.t_403, this.t_404, this.t_405, this.t_406, this.t_407, this.t_408, this.t_409, this.t_410,
      this.t_411, this.t_412, this.t_413, this.t_414, this.t_415, this.t_416, this.t_417, this.t_418, this.t_419, this.t_420,
      this.t_421, this.t_422, this.t_423, this.t_424, this.t_425, this.t_426, this.t_427, this.t_428, this.t_429, this.t_430,
      this.t_431, this.t_432, this.t_433, this.t_434, this.t_435, this.t_436, this.t_437, this.t_438, this.t_439, this.t_440,
      this.t_441, this.t_442, this.t_443, this.t_444
    ];

    this.verts = [
      this.v_001, this.v_002, this.v_003, this.v_004, this.v_005, this.v_006, this.v_007, this.v_008, this.v_009, this.v_010,
      this.v_011, this.v_012, this.v_013, this.v_014, this.v_015, this.v_016, this.v_017, this.v_018, this.v_019, this.v_020,
      this.v_021, this.v_022, this.v_023,
      this.v_024, this.v_025, this.v_026,
      this.v_027, this.v_028, this.v_029,
      this.v_030, this.v_031, this.v_032,
      this.v_033, this.v_034, this.v_035,
      this.v_036, this.v_037, this.v_038,
      this.v_039, this.v_040, this.v_041,
      this.v_042, this.v_043, this.v_044,
      this.v_045, this.v_046, this.v_047,
      this.v_048, this.v_049, this.v_050,
      this.v_051, this.v_052, this.v_053,
      this.v_054, this.v_055, this.v_056,
      this.v_057, this.v_058, this.v_059,
      this.v_060, this.v_061, this.v_062,
      this.v_063, this.v_064, this.v_065,
      this.v_066, this.v_067, this.v_068,
      this.v_069, this.v_070, this.v_071,
      this.v_072, this.v_073, this.v_074,
      this.v_075, this.v_076, this.v_077,
      this.v_078, this.v_079, this.v_080,
      this.v_081, this.v_082, this.v_083,
      this.v_084, this.v_085, this.v_086,
      this.v_087, this.v_088, this.v_089,
      this.v_090, this.v_091, this.v_092,
      this.v_093, this.v_094, this.v_095,
      this.v_096, this.v_097, this.v_098,
      this.v_099, this.v_100, this.v_101,
      this.v_102, this.v_103, this.v_104,
      this.v_105, this.v_106, this.v_107,
      this.v_108, this.v_109, this.v_110,
      this.v_111, this.v_112, this.v_113,
      this.v_114, this.v_115, this.v_116,
      this.v_117, this.v_118, this.v_119,
      this.v_120, this.v_121, this.v_122,
      this.v_123, this.v_124, this.v_125,
      this.v_126, this.v_127, this.v_128,
      this.v_129, this.v_130, this.v_131,
      this.v_132, this.v_133, this.v_134,
      this.v_135, this.v_136, this.v_137,
      this.v_138, this.v_139, this.v_140,
      this.v_141, this.v_142, this.v_143,
      this.v_144, this.v_145, this.v_146,
      this.v_147, this.v_148, this.v_149,
      this.v_150, this.v_151, this.v_152,
      this.v_153, this.v_154, this.v_155,
      this.v_156, this.v_157, this.v_158,
      this.v_159, this.v_160, this.v_161,
      this.v_162, this.v_163, this.v_164,
      this.v_165, this.v_166, this.v_167,
      this.v_168, this.v_169, this.v_170,
      this.v_171, this.v_172, this.v_173,
      this.v_174, this.v_175, this.v_176,
      this.v_177, this.v_178, this.v_179,
      this.v_180, this.v_181, this.v_182,
      this.v_183, this.v_184, this.v_185,
      this.v_186, this.v_187, this.v_188,
      this.v_189, this.v_190, this.v_191,
      this.v_192, this.v_193, this.v_194,
      this.v_195, this.v_196, this.v_197,
      this.v_198, this.v_199, this.v_200,
      this.v_201, this.v_202, this.v_203,
      this.v_204, this.v_205, this.v_206,
      this.v_207, this.v_208, this.v_209,
      this.v_210, this.v_211, this.v_212,
      this.v_213, this.v_214, this.v_215,
      this.v_216, this.v_217, this.v_218,
      this.v_219, this.v_220, this.v_221,
      this.v_222, this.v_223, this.v_224
    ];

  }
}