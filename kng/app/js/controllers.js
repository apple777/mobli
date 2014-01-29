'use strict';

/* Controllers */

var peoplecatApp = angular.module('peoplecatApp', []);

peoplecatApp.controller('PeopleListCtrl', function($scope) {
  $scope.people = [
    {
        "age": 0, 
        "year": "1797", 
        "id": "israel-bk", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Israel Bk", 
        "snippet": "Born into a family of Chabad Hassidim, Frumkin made aliya from Vilna at the age of 9. He lived in the Havatselet Court in Jerusalem’s Old City. In 1863 he founded the “Havatselet” newspaper, remaining editor until 1911. He fought the fanatics headed by the “Mitnagdim.” He supported modern education in Eretz Israel. He founded Tiferet Yerushalayim (Sephardim and Ashkenazim) to alleviate poverty, as well as the Ezrat Nidahim Foundation which supported Yemenite immigrants who established a neighborhood in the village of Silwan. His son Gad was the only Jewish Supreme Court judge during the Mandate period."
    }, 
    {
        "age": 1, 
        "year": "1845", 
        "id": "james-de-rothschild", 
        "imageUrl": "img/item/0.jpg", 
        "name": "James de Rothschild", 
        "snippet": "Set up by a pharmacist called Rubovitch and acquired in 1938 by pharmacist Willy Rosenberg. Operated during the War of Independence and all of Israel’s wars.Owned by the family since 1956."
    }, 
    {
        "age": 2, 
        "year": "1851", 
        "id": "israel-dov-frumkin", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Israel Dov Frumkin", 
        "snippet": "I am writing to you, grandfather, as one of your grandchildren, and on their behalf. With every year that passes in the life of the State and its people, we gain a greater understanding of the greatness of your path, the depth of your love for nation and people, your clarity, and your intellectual and human courage.In your grandchildren’s generation there is nobody who will attain your eminence in the world of Torah and in other fields"
    }, 
    {
        "age": 3,
        "year": "1854", 
        "id": "abraham-moses-luncz", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Abraham Moses Luncz", 
        "snippet": "In 1897, Mordechai Glick of the Old City of Jerusalem married Ita Lifkind. They lived in Mazkeret Moshe, making their living from a small winery there. Although they sent a first shipment of wine overseas, due to WW1 they received nothing for it.In 1928, their son Yitzhak Yaakov (1901) opened a wholesale paper business. He promoted printing and paper production in Eretz Israel. He became renowned for his generosity in helping the needy. He died in 1993. His descendants continue in his footsteps"
    }, 
    {
        "age": 4, 
        "year": "1845", 
        "id": "harav-kook", 
        "imageUrl": "img/item/0.jpg", 
        "name": "HaRav Kook", 
        "snippet": "Gershon Agron had four great loves, and achieved them all: Love for Eretz Israel and Jerusalem, journalism and his family.In 1918 volunteered for the American-Jewish Battalion with which he came to Eretz Israel. Settled in Jerusalem, engaged in journalistic and public activities. In 1932 founded and edited the Palestine Post, which in 1950 became the Jerusalem Post.In 1955, elected fourth mayor of Jerusalem, held post until his death."
    }, 
    {
        "age": 5, 
        "year": "1868", 
        "id": "joseph-meyuchas", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Joseph Meyuchas", 
        "snippet": "“I’m the editor-in-chief, Kalami writes French and I translate it, Almaliach is the permanent editor …. and Sapir is the hard-working manager who wants a dictatorship. Itzhak Abadi has turned out to be a serious writer, A. Aharonson has started a special jokes section… Dagan-Kornfeld used to write about internal affairs… and our great friend Frumkin, the Jewish judge (the son of I.D. Frumkin, the editor of Havatselet) calls us “Ha-Solel”…."
    }, 
    {
        "age": 6, 
        "year": "1873", 
        "id": "hayim-nahman-bialik", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Hayim Nahman Bialik", 
        "snippet": "It is no surprise that Ittamar – about whose beauty, wisdom and greatness we heard from “Moma Leah,” Drora and Rina’s mother, from morning to night – fell in love with the “divine” Leah, who from her photo was the most beautiful girl in Jerusalem. My familiarity with her as her grandson taught me that she was an educated, wise, witty and in particular refined Sephardi woman, who peppered her speech with sayings in seven languages. Her like no longer exists today."
    }, 
    {
        "age": 7, 
        "year": "1875", 
        "id": "harav-joseph-mordechai-halevy", 
        "imageUrl": "img/item/0.jpg", 
        "name": "HaRav Joseph Mordechai Halevy", 
        "snippet": "Rabbi Yosef Mordechai Halevi 1875-1947, neighbor and friend of Rabbi Kook.Of noble spirit, charismatic, erudite, with a keen intelligence. Renowned for his wisdom, gentleness, and agreeable temperament.Rosh Beit Din, member of the Chief Rabbinate Council, member of the Va’ad Leumi, and head of the Sephardi Community. He was an ardent Zionist."       
    }, 
    {
        "age": 8, 
        "year": "1880",         
        "id": "yehuda-kadish-silman", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Yehuda Kadish Silman", 
        "snippet": "Father, Rabbi Binyamin Halevi, loved coming to teach at the Institute for the Blind.* He would come from Ohel Moshe twice a week. He used to say, “My good pupils may not have physical eyes, but they have very far-seeing spiritual eyes.”* From 1910 to 1929 the Institute for the Blind was housed in Beit Amiel."
    }, 
    {
        "age": 9, 
        "year": "1880", 
        "id": "harav-ben-zion-meir-hai-uziel", 
        "imageUrl": "img/item/0.jpg", 
        "name": "HaRav Ben-Zion Meir Hai Uziel", 
        "snippet": "Rabbi Yosef Mordechai Halevi 1875-1947, neighbor and friend of Rabbi Kook.Of noble spirit, charismatic, erudite, with a keen intelligence. Renowned for his wisdom, gentleness, and agreeable temperament.Rosh Beit Din, member of the Chief Rabbinate Council, member of the Va’ad Leumi, and head of the Sephardi Community. He was an ardent Zionist."
    }, 
    {
        "age": 10, 
        "year": "1882", 
        "id": "abraham-zevi-idelsohn", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Abraham Zevi Idelsohn", 
        "snippet": "… “I speak to you from my soul,From within my innermost soul, from the living connectionBy which I am bound to all of you…Each one of you, each individual soul,From the aggregation of all of you, is a great and important sparkPart of the torch of the Light of the universe…Your land, the land of your hopes, is holy to me…”From “Orot HaRaAYaH,” quoted by the family"
    }, 
    {
        "age": 11, 
        "year": "1882", 
        "id": "itamar-ben-avi", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Itamar Ben-Avi", 
        "snippet": "Gershon Agron had four great loves, and achieved them all: Love for Eretz Israel and Jerusalem, journalism and his family.In 1918 volunteered for the American-Jewish Battalion with which he came to Eretz Israel. Settled in Jerusalem, engaged in journalistic and public activities. In 1932 founded and edited the Palestine Post, which in 1950 became the Jerusalem Post.In 1955, elected fourth mayor of Jerusalem, held post until his death."
    }, 
    {
        "age": 12, 
        "year": "1883", 
        "id": "avraham-albert ticho", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Avraham Albert Ticho", 
        "snippet": "“I’m the editor-in-chief, Kalami writes French and I translate it, Almaliach is the permanent editor …. and Sapir is the hard-working manager who wants a dictatorship. Itzhak Abadi has turned out to be a serious writer, A. Aharonson has started a special jokes section… Dagan-Kornfeld used to write about internal affairs… and our great friend Frumkin, the Jewish judge (the son of I.D. Frumkin, the editor of Havatselet) calls us “Ha-Solel”…."
    }, 
    {
        "age": 13, 
        "year": "1888", 
        "id": "nissim-levy", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Nissim levy", 
        "snippet": "… “I speak to you from my soul,From within my innermost soul, from the living connectionBy which I am bound to all of you…Each one of you, each individual soul,From the aggregation of all of you, is a great and important sparkPart of the torch of the Light of the universe…Your land, the land of your hopes, is holy to me…”From “Orot HaRaAYaH,” quoted by the family"
    }, 
    {
        "age": 14, 
        "year": "1892", 
        "id": "leah-abu-shdid", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Leah Abu Shdid", 
        "snippet": "It is no surprise that Ittamar – about whose beauty, wisdom and greatness we heard from “Moma Leah,” Drora and Rina’s mother, from morning to night – fell in love with the “divine” Leah, who from her photo was the most beautiful girl in Jerusalem. My familiarity with her as her grandson taught me that she was an educated, wise, witty and in particular refined Sephardi woman, who peppered her speech with sayings in seven languages. Her like no longer exists today."
    }, 
    {
        "age": 15, 
        "year": "1892", 
        "id": "mordechai-eliash", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Mordechai Eliash", 
        "snippet": "Mordechai Eliash (1892-1950) and Rabbi Kook were bosom friends. They met in London during WW1. Rabbi Kook had come to serve as rabbi to the Shomrei ha-Dat community, while Eliash was an Oxford student who had come to learn Semitic languages.Eliash was one of Eretz Israel’s leading attorneys, the head of the local bar association; legal adviser to the JNF, and 1919-1921 secretary to the Zionist Commission. Helped set up Yeshurun Synagogue"
    }, 
    {
        "age": 16, 
        "year": "1894", 
        "id": "gershon-agron", 
        "imageUrl": "img/item/0.jpg", 
        "name": "Gershon Agron", 
        "snippet": "Father, Rabbi Binyamin Halevi, loved coming to teach at the Institute for the Blind.* He would come from Ohel Moshe twice a week. He used to say, “My good pupils may not have physical eyes, but they have very far-seeing spiritual eyes.”* From 1910 to 1929 the Institute for the Blind was housed in Beit Amiel."
    }, 
    {
        "age": 17, 
        "year": "1894", 
        "id": "anna-ticho", 
        "imageurl": "img/item/0.jpg", 
        "name": "Anna Ticho", 
        "snippet": "Albert and Anna were my much admired uncle and aunt, pride and joy of the family. I remember their home was a source of support to me as a child. I looked up greatly to my uncle Avraham, who influenced my choice to specialize in ophthalmology.Anna was a model aunt, an artist of the first order, and their home was a second home to all of the local intellectual elite.I am happy to be a descendant of this wonderful family."
    }
]


;

  $scope.orderProp = 'year';
});
