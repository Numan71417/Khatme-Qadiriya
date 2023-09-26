const data = [
    {
        a1:" اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا وَ مَوْلَنَا مُحَمَّدٍ مَعْدَنِ الْجُودِ وَالْكَرَمِ وَالِهِ وَ بَارِكْ وَسَلِّمُ",

        a2:"سُبْحَنَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلهُ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ",

        a3:"أَلَمُ نَشْرَحْ لَكَ صَدْرَكَ وَوَضَعْنَا عَنكَ وِزْرَكَ الَّذِي أَنْقَضَ ظَهْرَكَ فَإِذَا فَرَغْتَ فَانْصَبُ وَإِلَى رَبِّكَ فَارْغَبُ  ",

        a4:"قُلْ هُوَ اللهُ أَحَدٌ اَللهُ الصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا اَحَدٌ ",

        a5:" يَا بَاقِي اَنْتَ الْبَاقِى ",

        a6:" يَا شَافِي اَنْتَ الشَّافِي ",

        a7:" يَا كَافِي أَنْتَ الْكَافِي  ",

        a8:" يَا رَسُولَ اللَّهِ انْظُرُ حَالَنَا يَا حَبِيبَ اللَّهِ إِسْمَعُ قَالَنَا إِنَّنِي فِي بَحْرِهَةٍ مُغْرَقَ خُذْيَدِى سَهِّلْ لَنَا أَشْكَالَنَا ",
        
        a9:" يَا حَبِيبَ الْإِلَهِ خُذْ بِيَدِى مَالِعَجْزِئُ سِوَاكَ مُسْتَنَدِى ",

        a10:"فَسَهَّلْ يَا إِلهِي كُلَّ صَعْبٍ بِحُرُمَةِ سَيِّدِ الْأَبْرَارِ سَهْلُ ",

        a11:"يَا صِدِّيقُ يَاعُمَرُ يَا عُثْمَانُ يَا حَيْدَر دَفَعُ شَرْكُنُ خَيْر أَوَرُ يَا شَبِيْرِ يَا شَبَّرُ  ",

        a12:" يَا حَضْرَتْ سُلْطَانُ شَيْخ سَيَّدَ شَاهُ عَبْدُ الْقَادِرُ جَيْلَانِي شَيْئًا لِلَّهِ الْمَدَدْ ",

        a13:" مَا هَمَه مُحْتَاجُ تُو حَاجَتْ رَوَا الْمَدَدْ يَا غَوُثِ أَعْظَمُ سَيَّدَا ",

        a14:"مُشْكِلاتِ ہے عَدَدْ دَارِيم مَا الْمَدَدْ يَا غَوثِ أَعْظَمُ بِيرِ مَا ",

        a15:" يَا حَضْرَتْ شَيْخ مُحِيُّ الدِّينِ مُشْكِلُ كُشَا بِالْخَيْرِ ",

        a16:" إِمْدَادُ كُنْ اِمْدَادُ كُنْ أَنْ بَنْدِ غَمُ آزادُكُنُ دَردِین و دُنْيَا شَادُكُنْ يَا غَوْتِ أَعْظَمُ دَسْتَكَيْر ",

        a17:"يَا حَضْرَتْ غَوْثُ اَغِلْنَا بِإِذْنِ اللَّهِ تَعَالَى ",

        a18:" خُذْيَدِى يَا شَاهِ حِيْلَانُ خُذْ يَدِى شَيْئًا لِلَّهِ أَنْتَ نُورٌ أَحْمَدِي",

        a19:"طفَيْل حَضْرَتْ دَسْتَكِيْر دُشمَنُ هو وے زیر",

        yaseen1:
        " یٰسٓ ۚ۱  وَ الْقُرْاٰنِ الْحَکِیۡمِ ۙ ۲  اِنَّکَ لَمِنَ الْمُرْسَلِیۡنَ ۙ ۳  عَلٰی صِرٰطٍ مُّسْتَقِیۡمٍ ؕ ۴  تَنۡزِیۡلَ الْعَزِیۡزِ الرَّحِیۡمِ۵  لِتُنۡذِرَ قَوْمًا مَّاۤ اُنۡذِرَ اٰبَآؤُہُمْ فَہُمْ غٰفِلُوۡنَ  ۶  لَقَدْ حَقَّ الْقَوْلُ عَلٰۤی اَکْثَرِہِمْ فَہُمْ لَا یُؤْمِنُوۡنَ۷  اِنَّا جَعَلْنَا فِیۡۤ اَعْنٰقِہِمْ اَغْلٰلًا فَہِیَ اِلَی الۡاَذْقَانِ فَہُمۡ مُّقْمَحُوۡنَ  ۸  وَ جَعَلْنَا مِنۡۢ بَیۡنِ اَیۡدِیۡہِمْ سَدًّا وَّ مِنْ خَلْفِہِمْ سَدًّا فَاَغْشَیۡنٰہُمْ فَہُمْ لَا یُبْصِرُوۡنَ  ۹  وَ سَوَآءٌ عَلَیۡہِمْ ءَاَنۡذَرْتَہُمْ اَمْ لَمْ تُنۡذِرْہُمْ لَا یُؤْمِنُوۡنَ۱۰  اِنَّمَا تُنۡذِرُ مَنِ اتَّبَعَ الذِّکْرَ وَ خَشِیَ الرَّحْمٰنَ بِالْغَیۡبِ ۚ فَبَشِّرْہُ بِمَغْفِرَۃٍ وَّ اَجْرٍ کَرِیۡمٍ۱۱  اِنَّا نَحْنُ نُحْیِ الْمَوْتٰی وَ نَکْتُبُ مَا قَدَّمُوۡا وَ اٰثَارَہُمْ ؕ؎ وَکُلَّ شَیۡءٍ اَحْصَیۡنٰہُ فِیۡۤ اِمَامٍ مُّبِیۡنٍ  ۱۲ ٪ وَاضْرِبْ لَہُمۡ مَّثَلًا اَصْحٰبَ الْقَرْیَۃِ ۘ اِذْ جَآءَہَا الْمُرْسَلُوۡنَ  ۚ۱۳  اِذْ اَرْسَلْنَاۤ اِلَیۡہِمُ اثْنَیۡنِ فَکَذَّبُوۡہُمَا فَعَزَّزْنَا بِثَالِثٍ فَقَالُوۡۤا اِنَّاۤ اِلَیۡکُمۡ مُّرْسَلُوۡنَ ",
        
        yaseen2: "۱۴  قَالُوۡا مَاۤ اَنۡتُمْ اِلَّا بَشَرٌ مِّثْلُنَا ۙ وَ مَاۤ اَنۡزَلَ الرَّحْمٰنُ مِنۡ شَیۡءٍ ۙ اِنْ اَنۡتُمْ اِلَّا تَکْذِبُوۡنَ۱۵  قَالُوۡا رَبُّنَا یَعْلَمُ اِنَّاۤ اِلَیۡکُمْ لَمُرْسَلُوۡنَ  ۱۶  وَمَا عَلَیۡنَاۤ اِلَّا الْبَلٰغُ الْمُبِیۡنُ۱۷  قَالُوۡۤا اِنَّا تَطَیَّرْنَا بِکُمْ ۚ لَئِنۡ لَّمْ تَنۡتَہُوۡا لَنَرْجُمَنَّکُمْ وَ لَیَمَسَّنَّکُمۡ مِّنَّا عَذَابٌ اَلِـیۡمٌ  ۱۸  قَالُوۡا طٰٓئِرُکُمْ مَّعَکُمْ ؕ اَئِنۡ ذُکِّرْتُمۡ ؕ بَلْ اَنۡتُمْ قَوْمٌ مُّسْرِفُوۡنَ  ۱۹  وَ جَآءَ مِنْ اَقْصَا الْمَدِیۡنَۃِ رَجُلٌ یَّسْعٰی۫ قَالَ یٰقَوْمِ اتَّبِعُوا الْمُرْسَلِیۡنَ  ۙ۲۰  اتَّبِعُوۡا مَنۡ لَّا یَسْـَٔلُکُمْ اَجْرًا وَّ ہُمۡ مُّہۡتَدُوۡنَ  ۲۱   وَمَا لِیَ لَاۤ اَعْبُدُ الَّذِیۡ فَطَرَنِیۡ وَ اِلَیۡہِ تُرْجَعُوۡنَ  ۲۲  ءَاَتَّخِذُ مِنۡ دُوۡنِہٖۤ اٰلِہَۃً اِنۡ یُّرِدْنِ الرَّحْمٰنُ بِضُرٍّ لَّا تُغْنِ عَنِّیۡ شَفٰعَتُہُمْ شَیْـًٔا وَّلَا یُنۡقِذُوۡنِ  ۚ۲۳  اِنِّیۡۤ اِذًا لَّفِیۡ ضَلٰلٍ مُّبِیۡنٍ  ۲۴  اِنِّیۡۤ اٰمَنۡتُ بِرَبِّکُمْ فَاسْمَعُوۡنِ  ؕ۲۵  قِیۡلَ ادْخُلِ الْجَنَّۃَ ؕ قَالَ یٰلَیۡتَ قَوْمِیۡ یَعْلَمُوۡنَ  ۙ۲۶  بِمَا غَفَرَ لِیۡ رَبِّیۡ وَ جَعَلَنِیۡ مِنَ الْمُکْرَمِیۡنَ  ۲۷  وَمَاۤ اَنۡزَلْنَا عَلٰی قَوْمِہٖ مِنۡۢ بَعْدِہٖ مِنْ جُنۡدٍ مِّنَ السَّمَآءِ وَمَا کُنَّا مُنۡزِلِیۡنَ  ۲۸  اِنۡ کَانَتْ اِلَّا صَیۡحَۃً وّٰحِدَۃً فَاِذَا ہُمْ خٰمِدُوۡنَ  ۲۹  یٰحَسْرَۃً عَلَی الْعِبَادِۚ مَا یَاۡتِیۡہِمۡ مِّنۡ رَّسُوۡلٍ اِلَّا کَانُوۡا بِہٖ یَسْتَہۡزِءُوۡنَ  ۳۰  اَلَمْ یَرَوْا کَمْ اَہۡلَکْنَا قَبْلَہُمۡ مِّنَ الْقُرُوۡنِ اَنَّہُمْ اِلَیۡہِمْ لَا یَرْجِعُوۡنَ ",
        
        yaseen3 : "۳۱  وَ اِنۡ کُلٌّ لَّمَّا جَمِیۡعٌ لَّدَیۡنَا مُحْضَرُوۡنَ  ۳۲ ٪ وَ اٰیَۃٌ لَّہُمُ الْاَرْضُ الْمَیۡتَۃُ ۚۖ اَحْیَیۡنٰہَا وَ اَخْرَجْنَا مِنْہَا حَبًّا فَمِنْہُ یَاۡکُلُوۡنَ  ۳۳  وَ جَعَلْنَا فِیۡہَا جَنّٰتٍ مِّنۡ نَّخِیۡلٍ وَّ اَعْنٰبٍ وَّ فَجَّرْنَا فِیۡہَا مِنَ الْعُیُوۡنِ  ۙ۳۴  لِیَاۡ کُلُوۡا مِنۡ ثَمَرِہٖ ۙ وَ مَا عَمِلَتْہُ اَیۡدِیۡہِمْ ؕ اَفَلَا یَشْکُرُوۡنَ  ۳۵  سُبْحٰنَ الَّذِیۡ خَلَقَ الْاَزْوٰجَ کُلَّہَا مِمَّا تُنۡۢبِتُ الْاَرْضُ وَ مِنْ اَنۡفُسِہِمْ وَ مِمَّا لَا یَعْلَمُوۡنَ  ۳۶  وَ اٰیَۃٌ لَّہُمُ الَّیۡلُ ۚۖ نَسْلَخُ مِنْہُ النَّہَارَ فَاِذَا ہُمۡ مُّظْلِمُوۡنَ  ۙ۳۷  وَ الشَّمْسُ تَجْرِیۡ لِمُسْتَقَرٍّ لَّہَا ؕ ذٰلِکَ تَقْدِیۡرُ الْعَزِیۡزِ الْعَلِیۡمِ  ؕ۳۸  وَ الْقَمَرَ قَدَّرْنٰہُ مَنَازِلَ حَتّٰی عَادَ کَالْعُرْجُوۡنِ الْقَدِیۡمِ  ۳۹  لَا الشَّمْسُ یَنۡۢبَغِیۡ لَہَاۤ اَنۡ تُدْرِکَ الْقَمَرَ وَ لَا الَّیۡلُ سَابِقُ النَّہَارِ ؕ وَکُلٌّ فِیۡ فَلَکٍ یَّسْبَحُوۡنَ  ۴۰   وَ اٰیَۃٌ لَّہُمْ اَنَّا حَمَلْنَا ذُرِّیَّتَہُمْ فِی الْفُلْکِ الْمَشْحُوۡنِ  ۙ۴۱  وَ خَلَقْنَا لَہُمۡ مِّنۡ مِّثْلِہٖ مَا یَرْکَبُوۡنَ  ۴۲  وَ اِنۡ نَّشَاۡ نُغْرِقْہُمْ فَلَا صَرِیۡخَ لَہُمْ وَلَا ہُمْ یُنۡقَذُوۡنَ  ۙ۴۳  اِلَّا رَحْمَۃً مِّنَّا وَ مَتٰعًا اِلٰی حِیۡنٍ  ۴۴  وَ اِذَا قِیۡلَ لَہُمُ اتَّقُوۡا مَا بَیۡنَ اَیۡدِیۡکُمْ وَمَا خَلْفَکُمْ لَعَلَّکُمْ تُرْحَمُوۡنَ  ۴۵  وَمَا تَاۡتِیۡہِمۡ مِّنْ اٰیَۃٍ مِّنْ اٰیٰتِ رَبِّہِمْ اِلَّا کَانُوۡا عَنْہَا مُعْرِضِیۡنَ ", 
        
        yaseen4 : "۴۶  وَ اِذَا قِیۡلَ لَہُمْ اَنۡفِقُوۡا مِمَّا رَزَقَکُمُ اللہُ ۙ قَالَ الَّذِیۡنَ کَفَرُوۡا لِلَّذِیۡنَ اٰمَنُوۡۤا اَنُطْعِمُ مَنۡ لَّوْ یَشَآءُ اللہُ اَطْعَمَہٗۤ ٭ۖ اِنْ اَنۡتُمْ اِلَّا فِیۡ ضَلٰلٍ مُّبِیۡنٍ  ۴۷  وَ یَقُوۡلُوۡنَ مَتٰی ہٰذَا الْوَعْدُ اِنۡ کُنۡتُمْ صٰدِقِیۡنَ  ۴۸  مَا یَنۡظُرُوۡنَ اِلَّا صَیۡحَۃً وّٰحِدَۃً تَاۡخُذُہُمْ وَ ہُمْ یَخِصِّمُوۡنَ  ۴۹  فَلَا یَسْتَطِیۡعُوۡنَ تَوْصِیَۃً وَّ لَاۤ اِلٰۤی اَہۡلِہِمْ یَرْجِعُوۡنَ۵۰  وَ نُفِخَ فِی الصُّوۡرِ فَاِذَا ہُمۡ مِّنَ الْاَجْدَاثِ اِلٰی رَبِّہِمْ یَنۡسِلُوۡنَ۵۱  قَالُوۡا یٰوَیۡلَنَا مَنۡۢ بَعَثَنَا مِنۡ مَّرْقَدِنَا ٜۘؐ ہٰذَا مَا وَعَدَ الرَّحْمٰنُ وَ صَدَقَ الْمُرْسَلُوۡنَ  ۵۲  اِنۡ کَانَتْ اِلَّا صَیۡحَۃً وّٰحِدَۃً فَاِذَا ہُمْ جَمِیۡعٌ لَّدَیۡنَا مُحْضَرُوۡنَ  ۵۳  فَالْیَوْمَ لَا تُظْلَمُ نَفْسٌ شَیْـًٔا وَّ لَا تُجْزَوْنَ اِلَّا مَا کُنۡتُمْ تَعْمَلُوۡنَ  ۵۴   اِنَّ اَصْحٰبَ الْجَنَّۃِ الْیَوْمَ فِیۡ شُغُلٍ فٰکِہُوۡنَ  ۚ۵۵  ہُمْ وَ اَزْوٰجُہُمْ فِیۡ ظِلٰلٍ عَلَی الْاَرَآئِکِ مُتَّکِــُٔوۡنَ  ۵۶  لَہُمْ فِیۡہَا فٰکِہَۃٌ وَّلَہُمْ مَّا یَدَّعُوۡنَ  ۚۖ۵۷  سَلٰمٌ ۟ قَوْلًا مِّنۡ رَّبٍّ رَّحِیۡمٍ  ۵۸  وَامْتٰزُوا الْیَوْمَ اَیُّہَا الْمُجْرِمُوۡنَ  ۵۹  اَلَمْ اَعْہَدْ اِلَیۡکُمْ یٰبَنِیۡۤ اٰدَمَ اَنۡ لَّا تَعْبُدُوا الشَّیۡطٰنَ ۚ اِنَّہٗ لَکُمْ عَدُوٌّ مُّبِیۡنٌ  ۙ۶۰  وَّ اَنِ اعْبُدُوۡنِیۡ ؕؔ ہٰذَا صِرٰطٌ مُّسْتَقِیۡمٌ  ۶۱  وَلَقَدۡ اَضَلَّ مِنۡکُمۡ جِبِلًّا کَثِیۡرًا ؕ اَفَلَمۡ تَکُوۡنُوۡا تَعۡقِلُوۡنَ  ۶۲  ہٰذِہٖ جَہَنَّمُ الَّتِیۡ کُنۡتُمۡ تُوۡعَدُوۡنَ  ۶۳  اِصْلَوْہَا الْیَوْمَ بِمَا کُنۡتُمْ تَکْفُرُوۡنَ  ۶۴  اَلْیَوْمَ نَخْتِمُ عَلٰۤی اَفْوٰہِہِمْ وَ تُکَلِّمُنَاۤ اَیۡدِیۡہِمْ وَ تَشْہَدُ اَرْجُلُہُمْ بِمَا کَانُوۡا یَکْسِبُوۡنَ  ۶۵  وَ لَوْ نَشَآءُ لَطَمَسْنَا عَلٰۤی اَعْیُنِہِمْ فَاسْتَبَقُوا الصِّرٰطَ فَاَنّٰی یُبْصِرُوۡنَ  ۶۶  وَلَوْ نَشَآءُ لَمَسَخْنٰہُمْ عَلٰی مَکَانَتِہِمْ فَمَا اسْتَطٰعُوۡا مُضِیًّا وَّلَا یَرْجِعُوۡنَ  ",

        yaseen5:" وَمَنْ نُّعَمِّرْہُ نُنَکِّسْہُ فِی الْخَلْقِ ؕ اَفَلَا یَعْقِلُوۡنَ  ۶۸  وَمَا عَلَّمْنٰہُ الشِّعْرَ وَمَا یَنۡۢبَغِیۡ لَہٗ ؕ اِنْ ہُوَ اِلَّا ذِکْرٌ وَّ قُرْاٰنٌ مُّبِیۡنٌ  ۙ۶۹  لِّیُنۡذِرَ مَنۡ کَانَ حَیًّا وَّ یَحِقَّ الْقَوْلُ عَلَی الْکٰفِرِیۡنَ۷۰   اَوَلَمْ یَرَوْا اَنَّا خَلَقْنَا لَہُمْ مِّمَّا عَمِلَتْ اَیۡدِیۡنَاۤ اَنْعٰمًا فَہُمْ لَہَا مٰلِکُوۡنَ۷۱  وَ ذَلَّلْنٰہَا لَہُمْ فَمِنْہَا رَکُوۡبُہُمْ وَ مِنْہَا یَاۡکُلُوۡنَ  ۷۲  وَ لَہُمْ فِیۡہَا مَنٰفِعُ وَ مَشَارِبُ ؕ اَفَلَا یَشْکُرُوۡنَ  ۷۳  وَ اتَّخَذُوۡا مِنۡ دُوۡنِ اللہِ اٰلِہَۃً لَّعَلَّہُمْ یُنۡصَرُوۡنَ  ؕ۷۴  لَا یَسْتَطِیۡعُوۡنَ نَصْرَہُمْ ۙ وَہُمْ لَہُمْ جُنۡدٌ مُّحْضَرُوۡنَ۷۵  فَلَا یَحْزُنۡکَ قَوْلُہُمْ ۘ اِنَّا نَعْلَمُ مَا یُسِرُّوۡنَ وَمَا یُعْلِنُوۡنَ  ۷۶  اَوَلَمْ یَرَ الْاِنۡسٰنُ اَنَّا خَلَقْنٰہُ مِنۡ نُّطْفَۃٍ فَاِذَا ہُوَ خَصِیۡمٌ مُّبِیۡنٌ۷۷  وَ ضَرَبَ لَنَا مَثَلًا وَّنَسِیَ خَلْقَہٗ ؕ قَالَ مَنْ یُّحْیِ الْعِظٰمَ وَ ہِیَ رَمِیۡمٌ  ۷۸  قُلْ یُحْیِیۡہَا الَّذِیۡۤ اَنۡشَاَہَاۤ اَوَّلَ مَرَّۃٍ ؕ وَ ہُوَ بِکُلِّ خَلْقٍ عَلِیۡمُۨ   ۙ۷۹  الَّذِیۡ جَعَلَ لَکُمۡ مِّنَ الشَّجَرِ الْاَخْضَرِ نَارًا فَاِذَاۤ اَنۡتُمۡ مِّنْہُ تُوۡقِدُوۡنَ  ۸۰  اَوَ لَیۡسَ الَّذِیۡ خَلَقَ السَّمٰوٰتِ وَ الْاَرْضَ بِقٰدِرٍ عَلٰۤی اَنْ یَّخْلُقَ مِثْلَہُمۡ ؕؔ بَلٰی  وَ ہُوَ الْخَلّٰقُ الْعَلِیۡمُ  ۸۱  اِنَّمَاۤ اَمْرُہٗۤ اِذَاۤ اَرَادَ شَیْـًٔا اَنْ یَّقُوۡلَ لَہٗ کُنْ فَیَکُوۡنُ  ۸۲  فَسُبْحٰنَ الَّذِیۡ بِیَدِہٖ مَلَکُوۡتُ کُلِّ شَیۡءٍ وَّ اِلَیۡہِ تُرْجَعُوۡنَ  ",
    }  
]

export default data