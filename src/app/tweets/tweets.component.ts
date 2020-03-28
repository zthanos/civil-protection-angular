import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  data = new TweetsData().Items
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitizeUrl(uri : string): SafeUrl{
    return this.sanitizer.bypassSecurityTrustUrl(uri);
  }

  displayImage(uri: string):boolean{
    return uri != null &&  uri != undefined;
  }
}

export class TweetsData {
  Items = {
    "statusCode": "200",
    "body": [
        {
            "TweetText": "RT @menoumespiti: #MenoumeSpiti | Οδηγίες για τα άτομα που νοσούν και μένουν στο σπίτι. \n#Coronavirus #Covid19 #eody https://t.co/mQEhT87WQp",
            "TweetId": "1243599063574024192",
            "CreatedAt": "Fri Mar 27 18:01:36 +0000 2020",
            "CreatedAtIso": "2020-03-27T18:01:36.000Z",
            "RetweetCount": 41,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1243499941923885056/pu/img/kUDJ0futxqQ8_hJJ.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#MenoumeSpiti | Οδηγίες για τα άτομα που νοσούν και μένουν στο σπίτι. \n#Coronavirus #Covid19 #eody https://t.co/mQEhT87WQp",
                "TweetId": "1243500078863732738",
                "CreatedAt": "Fri Mar 27 11:28:16 +0000 2020",
                "CreatedAtIso": "2020-03-27T11:28:16.000Z",
                "RetweetCount": 41,
                "TweetedBy": "menoumespiti",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1243499941923885056/pu/img/kUDJ0futxqQ8_hJJ.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Μένουμε Σπίτι",
                    "Location": "Ελλάς",
                    "Id": 1239125368101113900,
                    "UserName": "menoumespiti",
                    "FollowersCount": 1459,
                    "Description": "Επίσημος Λογαριασμός Καμπάνιας Υπουργείου Υγείας για τον Κορονοϊό.",
                    "StatusesCount": 35,
                    "FriendsCount": 6,
                    "FavouritesCount": 4,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1239132161099399168/QorWgq58_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Ζητάω από όλους προσοχή, φροντίδα για τις ευάλωτες ομάδες, να τηρούμε τα μέτρα &amp; να βοηθήσουμε γιατρούς, νοσηλευτές, παραϊατ…",
            "TweetId": "1243577421355458560",
            "CreatedAt": "Fri Mar 27 16:35:36 +0000 2020",
            "CreatedAtIso": "2020-03-27T16:35:36.000Z",
            "RetweetCount": 39,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ζητάω από όλους προσοχή, φροντίδα για τις ευάλωτες ομάδες, να τηρούμε τα μέτρα &amp; να βοηθήσουμε γιατρούς, νοσηλευτές, παραϊατρικό &amp; διοικητικό προσωπικό, να φέρουν εις πέρας μέχρι τέλους, τη συγκλονιστική προσπαθεία τους.\n#ΑΧΕΠΑ #COVID19 \nhttps://t.co/TXu0h15KVB",
                "TweetId": "1243577017720803329",
                "CreatedAt": "Fri Mar 27 16:34:00 +0000 2020",
                "CreatedAtIso": "2020-03-27T16:34:00.000Z",
                "RetweetCount": 39,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: #covid19Gr \nΕπίσκεψη @Vkikilias στο ΑΧΕΠΑ - Ανοίγουν 17 νέες κλίνες #ΜΕΘ\n\nhttps://t.co/3qY6c1SCIT\n\n#COVIDー19 #COVID2019 #COV…",
            "TweetId": "1243552336351580162",
            "CreatedAt": "Fri Mar 27 14:55:55 +0000 2020",
            "CreatedAtIso": "2020-03-27T14:55:55.000Z",
            "RetweetCount": 4,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                },
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#covid19Gr \nΕπίσκεψη @Vkikilias στο ΑΧΕΠΑ - Ανοίγουν 17 νέες κλίνες #ΜΕΘ\n\nhttps://t.co/3qY6c1SCIT\n\n#COVIDー19 #COVID2019 #COVID19 #Covid_19 #coronavirus #κορονοϊός #πανδημία https://t.co/piSgJlS4XK",
                "TweetId": "1243544601702436864",
                "CreatedAt": "Fri Mar 27 14:25:11 +0000 2020",
                "CreatedAtIso": "2020-03-27T14:25:11.000Z",
                "RetweetCount": 4,
                "TweetedBy": "amna_news",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUH1FeEXsAY-C-b.png"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 54283324,
                        "FullName": "Vassilis Kikilias",
                        "UserName": "Vkikilias"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @menoumespiti: #MenoumeSpiti | Οδηγίες για τα άτομα που νοσούν και μένουν στο σπίτι. \n#Coronavirus #Covid19 #eody https://t.co/mQEhT87WQp",
            "TweetId": "1243503972515811328",
            "CreatedAt": "Fri Mar 27 11:43:44 +0000 2020",
            "CreatedAtIso": "2020-03-27T11:43:44.000Z",
            "RetweetCount": 41,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1243499941923885056/pu/img/kUDJ0futxqQ8_hJJ.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#MenoumeSpiti | Οδηγίες για τα άτομα που νοσούν και μένουν στο σπίτι. \n#Coronavirus #Covid19 #eody https://t.co/mQEhT87WQp",
                "TweetId": "1243500078863732738",
                "CreatedAt": "Fri Mar 27 11:28:16 +0000 2020",
                "CreatedAtIso": "2020-03-27T11:28:16.000Z",
                "RetweetCount": 41,
                "TweetedBy": "menoumespiti",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1243499941923885056/pu/img/kUDJ0futxqQ8_hJJ.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Μένουμε Σπίτι",
                    "Location": "Ελλάς",
                    "Id": 1239125368101113900,
                    "UserName": "menoumespiti",
                    "FollowersCount": 1459,
                    "Description": "Επίσημος Λογαριασμός Καμπάνιας Υπουργείου Υγείας για τον Κορονοϊό.",
                    "StatusesCount": 35,
                    "FriendsCount": 6,
                    "FavouritesCount": 4,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1239132161099399168/QorWgq58_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Ανακοίνωση για την παράταση της Πρόσκλησης ΑΤΤ104 https://t.co/Sm7ILCenk0 https://t.co/j60YhSGNaR",
            "TweetId": "1243481539519762432",
            "CreatedAt": "Fri Mar 27 10:14:36 +0000 2020",
            "CreatedAtIso": "2020-03-27T10:14:36.000Z",
            "RetweetCount": 0,
            "TweetedBy": "pepattikis",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUG73uuU0AA3NW6.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Π.Ε.Π. ΑΤΤΙΚΗΣ",
                "Location": "98-100 Syggrou Av., Athens, GR",
                "Id": 3033430678,
                "UserName": "pepattikis",
                "FollowersCount": 148,
                "Description": "Account managed by Managing Authority of Attica Region",
                "StatusesCount": 401,
                "FriendsCount": 61,
                "FavouritesCount": 21,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/605486400687996928/CUw8plgL_normal.jpg"
            }
        },
        {
            "TweetText": "2η Τροποποίηση Πρόσκλησης ΑΤΤ104 &amp; Συνοδευτικό Υλικό https://t.co/NYG5xQGQKq https://t.co/fo1hk6cH0m",
            "TweetId": "1243481283591888896",
            "CreatedAt": "Fri Mar 27 10:13:35 +0000 2020",
            "CreatedAtIso": "2020-03-27T10:13:35.000Z",
            "RetweetCount": 0,
            "TweetedBy": "pepattikis",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUG7olPWsAMO_6F.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Π.Ε.Π. ΑΤΤΙΚΗΣ",
                "Location": "98-100 Syggrou Av., Athens, GR",
                "Id": 3033430678,
                "UserName": "pepattikis",
                "FollowersCount": 148,
                "Description": "Account managed by Managing Authority of Attica Region",
                "StatusesCount": 401,
                "FriendsCount": 61,
                "FavouritesCount": 21,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/605486400687996928/CUw8plgL_normal.jpg"
            }
        },
        {
            "TweetText": "2η Τροποποίηση της Απόφασης Ενταξης Πράξεων με Κωδικό ΟΠΣ 3664 https://t.co/2TyGGJjfb7 https://t.co/iG6Zm5HbyG",
            "TweetId": "1243480437567225856",
            "CreatedAt": "Fri Mar 27 10:10:13 +0000 2020",
            "CreatedAtIso": "2020-03-27T10:10:13.000Z",
            "RetweetCount": 0,
            "TweetedBy": "pepattikis",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUG63k-XsAAq6IW.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Π.Ε.Π. ΑΤΤΙΚΗΣ",
                "Location": "98-100 Syggrou Av., Athens, GR",
                "Id": 3033430678,
                "UserName": "pepattikis",
                "FollowersCount": 148,
                "Description": "Account managed by Managing Authority of Attica Region",
                "StatusesCount": 401,
                "FriendsCount": 61,
                "FavouritesCount": 21,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/605486400687996928/CUw8plgL_normal.jpg"
            }
        },
        {
            "TweetText": "Απόφαση Έγκρισης του υπ αριθμ. 2/04.03.2020 Πρακτικού της Επιτροπής Αξιολόγησης https://t.co/U451AyJQaB https://t.co/o65sd5yOP3",
            "TweetId": "1243479777815810050",
            "CreatedAt": "Fri Mar 27 10:07:36 +0000 2020",
            "CreatedAtIso": "2020-03-27T10:07:36.000Z",
            "RetweetCount": 0,
            "TweetedBy": "pepattikis",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUG6RK2XQAEHyaF.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Π.Ε.Π. ΑΤΤΙΚΗΣ",
                "Location": "98-100 Syggrou Av., Athens, GR",
                "Id": 3033430678,
                "UserName": "pepattikis",
                "FollowersCount": 148,
                "Description": "Account managed by Managing Authority of Attica Region",
                "StatusesCount": 401,
                "FriendsCount": 61,
                "FavouritesCount": 21,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/605486400687996928/CUw8plgL_normal.jpg"
            }
        },
        {
            "TweetText": "Ενημέρωση Φορέων για θέματα Γραφείου ΟΠΣ και γενικής λειτουργίας της ΕΥΔΕΠ Περιφέρειας Αττικής https://t.co/vwxzSOdms8 https://t.co/FVECCVejlW",
            "TweetId": "1243459901357207552",
            "CreatedAt": "Fri Mar 27 08:48:37 +0000 2020",
            "CreatedAtIso": "2020-03-27T08:48:37.000Z",
            "RetweetCount": 0,
            "TweetedBy": "pepattikis",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUGoMNNXQAIhGhA.png"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Π.Ε.Π. ΑΤΤΙΚΗΣ",
                "Location": "98-100 Syggrou Av., Athens, GR",
                "Id": 3033430678,
                "UserName": "pepattikis",
                "FollowersCount": 148,
                "Description": "Account managed by Managing Authority of Attica Region",
                "StatusesCount": 401,
                "FriendsCount": 61,
                "FavouritesCount": 21,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/605486400687996928/CUw8plgL_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: Παραμένουμε σε κατάσταση αυξημένης επαγρύπνησης. Συμπεριφορές που δείχνουν την αυξημένη μας ευαισθησία, αλλά και επαγρύπνηση, ε…",
            "TweetId": "1243289483996528642",
            "CreatedAt": "Thu Mar 26 21:31:26 +0000 2020",
            "CreatedAtIso": "2020-03-26T21:31:26.000Z",
            "RetweetCount": 15,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Παραμένουμε σε κατάσταση αυξημένης επαγρύπνησης. Συμπεριφορές που δείχνουν την αυξημένη μας ευαισθησία, αλλά και επαγρύπνηση, είναι απαραίτητες τις ημέρες αυτές &amp; παρακαλώ όλους να τηρούμε τα μέτρα αποστασιοποίησης. \n⁦@STsiodras⁩ ⁦@nhardalias⁩ https://t.co/zwXZ6fXZAT",
                "TweetId": "1243261680664154114",
                "CreatedAt": "Thu Mar 26 19:40:58 +0000 2020",
                "CreatedAtIso": "2020-03-26T19:40:58.000Z",
                "RetweetCount": 15,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    },
                    {
                        "Id": 86951686,
                        "FullName": "Νίκος Γ. Χαρδαλιάς",
                        "UserName": "nhardalias"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @kmitsotakis: Αυτές τις μέρες, φροντίζουμε τη σωματική αλλά και την ψυχολογική μας υγεία. Η Α΄ Ψυχιατρική Κλινική της Ιατρικής Σχολής το…",
            "TweetId": "1243270501235032064",
            "CreatedAt": "Thu Mar 26 20:16:01 +0000 2020",
            "CreatedAtIso": "2020-03-26T20:16:01.000Z",
            "RetweetCount": 254,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 14283525,
                    "FullName": "Kyriakos Mitsotakis",
                    "UserName": "kmitsotakis"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Αυτές τις μέρες, φροντίζουμε τη σωματική αλλά και την ψυχολογική μας υγεία. Η Α΄ Ψυχιατρική Κλινική της Ιατρικής Σχολής του Εθνικού &amp; Καποδιστριακού Πανεπιστημίου Αθηνών εκπόνησε οδηγίες Ψυχολογικής Υποστήριξης Πολιτών λόγω του κορονοϊού. Δείτε τις εδώ: https://t.co/zYRfylX4pF https://t.co/nIjzrj09sg",
                "TweetId": "1243229204822589440",
                "CreatedAt": "Thu Mar 26 17:31:55 +0000 2020",
                "CreatedAtIso": "2020-03-26T17:31:55.000Z",
                "RetweetCount": 254,
                "TweetedBy": "kmitsotakis",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUDWSbWXsAwF1KX.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Kyriakos Mitsotakis",
                    "Location": "Αθήνα, Ελλάδα",
                    "Id": 14283525,
                    "UserName": "kmitsotakis",
                    "FollowersCount": 246748,
                    "Description": "Πρωθυπουργός της Ελληνικής Δημοκρατίας και Πρόεδρος της Νέας Δημοκρατίας",
                    "StatusesCount": 8200,
                    "FriendsCount": 1987,
                    "FavouritesCount": 1103,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1092471825257451524/svIt4XYS_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "🔵 Ενημέρωση από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR\nγια το νέο #COVIDー19 Καθηγητή @STsiodras\n\n@eody_gr #handshygiene @menoumespiti\n\n Δείτε περισσότερα🔗 https://t.co/72OL9y5nHg https://t.co/bNcj9YrY54",
            "TweetId": "1243267997491494920",
            "CreatedAt": "Thu Mar 26 20:06:04 +0000 2020",
            "CreatedAtIso": "2020-03-26T20:06:04.000Z",
            "RetweetCount": 11,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUD4CH3WkAE8Y9C.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @kmitsotakis: Αυτές τις μέρες, φροντίζουμε τη σωματική αλλά και την ψυχολογική μας υγεία. Η Α΄ Ψυχιατρική Κλινική της Ιατρικής Σχολής το…",
            "TweetId": "1243261915088007168",
            "CreatedAt": "Thu Mar 26 19:41:53 +0000 2020",
            "CreatedAtIso": "2020-03-26T19:41:53.000Z",
            "RetweetCount": 254,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 14283525,
                    "FullName": "Kyriakos Mitsotakis",
                    "UserName": "kmitsotakis"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Αυτές τις μέρες, φροντίζουμε τη σωματική αλλά και την ψυχολογική μας υγεία. Η Α΄ Ψυχιατρική Κλινική της Ιατρικής Σχολής του Εθνικού &amp; Καποδιστριακού Πανεπιστημίου Αθηνών εκπόνησε οδηγίες Ψυχολογικής Υποστήριξης Πολιτών λόγω του κορονοϊού. Δείτε τις εδώ: https://t.co/zYRfylX4pF https://t.co/nIjzrj09sg",
                "TweetId": "1243229204822589440",
                "CreatedAt": "Thu Mar 26 17:31:55 +0000 2020",
                "CreatedAtIso": "2020-03-26T17:31:55.000Z",
                "RetweetCount": 254,
                "TweetedBy": "kmitsotakis",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/EUDWSbWXsAwF1KX.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Kyriakos Mitsotakis",
                    "Location": "Αθήνα, Ελλάδα",
                    "Id": 14283525,
                    "UserName": "kmitsotakis",
                    "FollowersCount": 246748,
                    "Description": "Πρωθυπουργός της Ελληνικής Δημοκρατίας και Πρόεδρος της Νέας Δημοκρατίας",
                    "StatusesCount": 8200,
                    "FriendsCount": 1987,
                    "FavouritesCount": 1103,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1092471825257451524/svIt4XYS_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Παραμένουμε σε κατάσταση αυξημένης επαγρύπνησης. Συμπεριφορές που δείχνουν την αυξημένη μας ευαισθησία, αλλά και επαγρύπνηση, είναι απαραίτητες τις ημέρες αυτές &amp; παρακαλώ όλους να τηρούμε τα μέτρα αποστασιοποίησης. \n⁦@STsiodras⁩ ⁦@nhardalias⁩ https://t.co/zwXZ6fXZAT",
            "TweetId": "1243261680664154114",
            "CreatedAt": "Thu Mar 26 19:40:58 +0000 2020",
            "CreatedAtIso": "2020-03-26T19:40:58.000Z",
            "RetweetCount": 15,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                },
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#γρίπη #flu #gripi\nBρισκόμαστε σε περίοδο χαμηλής δραστηριότητας της γρίπης στην Ελλάδα -  Εβδομαδιαία Έκθεση Επιδημιολογικής Επιτήρησης της Γρίπης,Eβδομάδα 12/2020 (16–22 Μαρτίου 2020):https://t.co/C0Sx8ZXAmW https://t.co/bHo7gPsyYh",
            "TweetId": "1243259690332704774",
            "CreatedAt": "Thu Mar 26 19:33:03 +0000 2020",
            "CreatedAtIso": "2020-03-26T19:33:03.000Z",
            "RetweetCount": 2,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/media/EUDx87oXkAgWfeW.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @amna_news: #LIVE #Χαρδαλιάς Οσο πιο αυστηρά θα εφαρμόσουμε τα μέτρα τόσο πιο γρήγορα θα πάρουμε τις ζωές μας πίσω\n\n#covid19Gr #πανδημία…",
            "TweetId": "1243214983435034624",
            "CreatedAt": "Thu Mar 26 16:35:24 +0000 2020",
            "CreatedAtIso": "2020-03-26T16:35:24.000Z",
            "RetweetCount": 10,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#LIVE #Χαρδαλιάς Οσο πιο αυστηρά θα εφαρμόσουμε τα μέτρα τόσο πιο γρήγορα θα πάρουμε τις ζωές μας πίσω\n\n#covid19Gr #πανδημία #κορονοϊός #covid2019 #covid19 #COVIDー19",
                "TweetId": "1243209677988642817",
                "CreatedAt": "Thu Mar 26 16:14:19 +0000 2020",
                "CreatedAtIso": "2020-03-26T16:14:19.000Z",
                "RetweetCount": 10,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "250058740",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Μέσα σε λίγες μέρες, σχεδόν 9.000 συμπολίτες μας, γιατροί, νοσηλευτές, παραϊατρικό προσωπικό, φοιτητές, άνθρωποι που μπορούν…",
            "TweetId": "1243179709518745611",
            "CreatedAt": "Thu Mar 26 14:15:14 +0000 2020",
            "CreatedAtIso": "2020-03-26T14:15:14.000Z",
            "RetweetCount": 97,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Μέσα σε λίγες μέρες, σχεδόν 9.000 συμπολίτες μας, γιατροί, νοσηλευτές, παραϊατρικό προσωπικό, φοιτητές, άνθρωποι που μπορούν να βοηθήσουν το σύστημα υγείας, έχουν εγγραφεί στην ηλεκτρονική πλατφόρμα https://t.co/FqoqqWu6sO. Τους ευχαριστούμε &amp; συνεχίζουμε. https://t.co/HlcyWQmiDK",
                "TweetId": "1243177414915690496",
                "CreatedAt": "Thu Mar 26 14:06:07 +0000 2020",
                "CreatedAtIso": "2020-03-26T14:06:07.000Z",
                "RetweetCount": 97,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Μέσα σε λίγες μέρες, σχεδόν 9.000 συμπολίτες μας, γιατροί, νοσηλευτές, παραϊατρικό προσωπικό, φοιτητές, άνθρωποι που μπορούν…",
            "TweetId": "1243177486487367681",
            "CreatedAt": "Thu Mar 26 14:06:24 +0000 2020",
            "CreatedAtIso": "2020-03-26T14:06:24.000Z",
            "RetweetCount": 97,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Μέσα σε λίγες μέρες, σχεδόν 9.000 συμπολίτες μας, γιατροί, νοσηλευτές, παραϊατρικό προσωπικό, φοιτητές, άνθρωποι που μπορούν να βοηθήσουν το σύστημα υγείας, έχουν εγγραφεί στην ηλεκτρονική πλατφόρμα https://t.co/FqoqqWu6sO. Τους ευχαριστούμε &amp; συνεχίζουμε. https://t.co/HlcyWQmiDK",
                "TweetId": "1243177414915690496",
                "CreatedAt": "Thu Mar 26 14:06:07 +0000 2020",
                "CreatedAtIso": "2020-03-26T14:06:07.000Z",
                "RetweetCount": 97,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @govgr: .@SteliosPetsas: Διανύουμε τώρα τις δύο πιο κρίσιμες εβδομάδες και είναι θετικό το γεγονός ότι οι Έλληνες - στη μεγάλη πλειονότη…",
            "TweetId": "1243175396092362752",
            "CreatedAt": "Thu Mar 26 13:58:06 +0000 2020",
            "CreatedAtIso": "2020-03-26T13:58:06.000Z",
            "RetweetCount": 33,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 207483074,
                    "FullName": "Ελληνική Κυβέρνηση",
                    "UserName": "govgr"
                },
                {
                    "Id": 4849241374,
                    "FullName": "Stelios Petsas",
                    "UserName": "SteliosPetsas"
                }
            ],
            "OriginalTweet": {
                "TweetText": ".@SteliosPetsas: Διανύουμε τώρα τις δύο πιο κρίσιμες εβδομάδες και είναι θετικό το γεγονός ότι οι Έλληνες - στη μεγάλη πλειονότητα - επιδεικνύουν συγκινητική συμμόρφωση σε πολύ δύσκολα, πρωτοφανή μέτρα που δεν έχουν επιβληθεί ποτέ σε καιρό ειρήνης.",
                "TweetId": "1243170893964197888",
                "CreatedAt": "Thu Mar 26 13:40:12 +0000 2020",
                "CreatedAtIso": "2020-03-26T13:40:12.000Z",
                "RetweetCount": 33,
                "TweetedBy": "govgr",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 4849241374,
                        "FullName": "Stelios Petsas",
                        "UserName": "SteliosPetsas"
                    }
                ],
                "UserDetails": {
                    "FullName": "Ελληνική Κυβέρνηση",
                    "Location": "Greece",
                    "Id": 207483074,
                    "UserName": "govgr",
                    "FollowersCount": 44091,
                    "Description": "Επίσημος λογαριασμός ενημέρωσης για το έργο & τη δραστηριότητα της Κυβέρνησης της Ελληνικής Δημοκρατίας.",
                    "StatusesCount": 4409,
                    "FriendsCount": 498,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/912632010895708161/3H1btHin_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Όπως έχω πει στη μάχη αυτή δεν περισσεύει κανείς. \nΠόσο μάλλον ένας επιστήμονας εγνωσμένης αξίας. \nΚαλή Επιτυχία! \nΕνωμένοι…",
            "TweetId": "1243175335329439746",
            "CreatedAt": "Thu Mar 26 13:57:51 +0000 2020",
            "CreatedAtIso": "2020-03-26T13:57:51.000Z",
            "RetweetCount": 65,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Όπως έχω πει στη μάχη αυτή δεν περισσεύει κανείς. \nΠόσο μάλλον ένας επιστήμονας εγνωσμένης αξίας. \nΚαλή Επιτυχία! \nΕνωμένοι θα νικήσουμε!\n#covid19Gr \n\nhttps://t.co/8rCsbzTj2d",
                "TweetId": "1243174151751426048",
                "CreatedAt": "Thu Mar 26 13:53:09 +0000 2020",
                "CreatedAtIso": "2020-03-26T13:53:09.000Z",
                "RetweetCount": 65,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "O 12ωρος υετός (που αφορά το προηγούμενο χρονικό διάστημα από την ώρα αναγραφής στο χάρτη) για τον Ελληνικό χώρο μέχρι το μεσημέρι του Σαββάτου. Μεγάλα ποσά υετού την Παρασκευή κυρίως σε Αν. Πελ/σο, Αν. Στερεά , Εύβοια , Θεσσαλία και Β. Σποράδες https://t.co/jw3bFqX1PW",
            "TweetId": "1243145928078475265",
            "CreatedAt": "Thu Mar 26 12:01:00 +0000 2020",
            "CreatedAtIso": "2020-03-26T12:01:00.000Z",
            "RetweetCount": 6,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1243143684910170112/pu/img/y5Wr6KEbKA_gdK1w.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4398,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 105,
                "FriendsCount": 30,
                "FavouritesCount": 65,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "RT @amna_news: 🔴 #Live #Briefing\n@SteliosPetsas: Μέχρι σήμερα το πρωί 8.885 συμπολίτες μας έχουν εγγραφεί στο https://t.co/V7F1YTkPwj",
            "TweetId": "1243126092728279042",
            "CreatedAt": "Thu Mar 26 10:42:11 +0000 2020",
            "CreatedAtIso": "2020-03-26T10:42:11.000Z",
            "RetweetCount": 6,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                },
                {
                    "Id": 4849241374,
                    "FullName": "Stelios Petsas",
                    "UserName": "SteliosPetsas"
                }
            ],
            "OriginalTweet": {
                "TweetText": "🔴 #Live #Briefing\n@SteliosPetsas: Μέχρι σήμερα το πρωί 8.885 συμπολίτες μας έχουν εγγραφεί στο https://t.co/V7F1YTkPwj",
                "TweetId": "1243126020661825537",
                "CreatedAt": "Thu Mar 26 10:41:54 +0000 2020",
                "CreatedAtIso": "2020-03-26T10:41:54.000Z",
                "RetweetCount": 6,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "250058740",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 4849241374,
                        "FullName": "Stelios Petsas",
                        "UserName": "SteliosPetsas"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: Οδηγίες από την Ελληνική Πνευμονολογική Εταιρεία για ασθενείς με άσθμα και #ΧΑΠ σχετικά με τον #COVID2019 \n\n#coronavirus #CO…",
            "TweetId": "1243124974774358017",
            "CreatedAt": "Thu Mar 26 10:37:44 +0000 2020",
            "CreatedAtIso": "2020-03-26T10:37:44.000Z",
            "RetweetCount": 10,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Οδηγίες από την Ελληνική Πνευμονολογική Εταιρεία για ασθενείς με άσθμα και #ΧΑΠ σχετικά με τον #COVID2019 \n\n#coronavirus #COVID19 #StayHome #κορονοϊός #μένουμε_σπίτι #καραντίνα\n\nhttps://t.co/GZHUqPi1LN",
                "TweetId": "1243124852996755456",
                "CreatedAt": "Thu Mar 26 10:37:15 +0000 2020",
                "CreatedAtIso": "2020-03-26T10:37:15.000Z",
                "RetweetCount": 10,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: 🔴 #Live #Briefing\n@SteliosPetsas: Πριν από 2 μήνες είχαμε 565 κλίνες ΜΕΘ, σήμερα είναι συνολικά 813, μαζί με τις ιδιωτικές.",
            "TweetId": "1243124906486894594",
            "CreatedAt": "Thu Mar 26 10:37:28 +0000 2020",
            "CreatedAtIso": "2020-03-26T10:37:28.000Z",
            "RetweetCount": 7,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                },
                {
                    "Id": 4849241374,
                    "FullName": "Stelios Petsas",
                    "UserName": "SteliosPetsas"
                }
            ],
            "OriginalTweet": {
                "TweetText": "🔴 #Live #Briefing\n@SteliosPetsas: Πριν από 2 μήνες είχαμε 565 κλίνες ΜΕΘ, σήμερα είναι συνολικά 813, μαζί με τις ιδιωτικές.",
                "TweetId": "1243124518555615234",
                "CreatedAt": "Thu Mar 26 10:35:56 +0000 2020",
                "CreatedAtIso": "2020-03-26T10:35:56.000Z",
                "RetweetCount": 7,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "250058740",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 4849241374,
                        "FullName": "Stelios Petsas",
                        "UserName": "SteliosPetsas"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @WHO: #BeActive and stay #HealthyAtHome ! Here are some physical activities you can do at home during #COVID19 outbreak:\n\n🤸‍Try exercise…",
            "TweetId": "1242931418126221316",
            "CreatedAt": "Wed Mar 25 21:48:37 +0000 2020",
            "CreatedAtIso": "2020-03-25T21:48:37.000Z",
            "RetweetCount": 4752,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 14499829,
                    "FullName": "World Health Organization (WHO)",
                    "UserName": "WHO"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#BeActive and stay #HealthyAtHome ! Here are some physical activities you can do at home during #COVID19 outbreak:\n\n🤸‍Try exercise classes online\n💃Dance to music\n🎮Play active video games\n🤾Try skipping rope\n💪Do some muscle strength &amp; balance training\n\n#coronavirus https://t.co/1lt300HYhK",
                "TweetId": "1242738384772239360",
                "CreatedAt": "Wed Mar 25 09:01:34 +0000 2020",
                "CreatedAtIso": "2020-03-25T09:01:34.000Z",
                "RetweetCount": 4752,
                "TweetedBy": "WHO",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET8X-NJWsAE-4ql.jpg"
                ],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "World Health Organization (WHO)",
                    "Location": "Geneva, Switzerland",
                    "Id": 14499829,
                    "UserName": "WHO",
                    "FollowersCount": 6801076,
                    "Description": "We are the #UnitedNations’ health agency. We are committed to achieving better health for everyone, everywhere - #HealthForAll",
                    "StatusesCount": 49288,
                    "FriendsCount": 1716,
                    "FavouritesCount": 10546,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/875476478988886016/_l61qZdR_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \nΝα παρακολουθείτε την υγεία σας σε συνεργασία πάντα με τον γιατρό σας. Χρειάζεται τακτική επικοινωνία με επα…",
            "TweetId": "1242931236492005376",
            "CreatedAt": "Wed Mar 25 21:47:53 +0000 2020",
            "CreatedAtIso": "2020-03-25T21:47:53.000Z",
            "RetweetCount": 13,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \nΝα παρακολουθείτε την υγεία σας σε συνεργασία πάντα με τον γιατρό σας. Χρειάζεται τακτική επικοινωνία με επαγγελματία υγείας. Να μένετε σε ένα καλά αεριζόμενο δωμάτιο που θα χρησιμοποιείται μόνο από εσάς.\n\n⁦@STsiodras⁩ ⁦ https://t.co/xUtBa8TeAA",
                "TweetId": "1242876880912613378",
                "CreatedAt": "Wed Mar 25 18:11:54 +0000 2020",
                "CreatedAtIso": "2020-03-25T18:11:54.000Z",
                "RetweetCount": 13,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @kedegr: 🐶 🐈 Το έντυπο - βεβαίωση μετακίνησης για τη σίτιση αδέσποτων ζώων \n\nΘα εκδίδονται από αύριο, Πέμπτη 26.03.2020, από το αρμόδιο…",
            "TweetId": "1242917865877053440",
            "CreatedAt": "Wed Mar 25 20:54:46 +0000 2020",
            "CreatedAtIso": "2020-03-25T20:54:46.000Z",
            "RetweetCount": 24,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 238950139,
                    "FullName": "ΚΕΔΕ",
                    "UserName": "kedegr"
                }
            ],
            "OriginalTweet": {
                "TweetText": "🐶 🐈 Το έντυπο - βεβαίωση μετακίνησης για τη σίτιση αδέσποτων ζώων \n\nΘα εκδίδονται από αύριο, Πέμπτη 26.03.2020, από το αρμόδιο τμήμα του οικείου Δήμου των πολιτών. \n\nΚατεβάστε το έντυπο εδώ:\n➡️ https://t.co/4S7nOAzklc\n\n#KEDE #diplastonpoliti #menoumespiti \n\n@GSCP_GR @ypesgr https://t.co/Vi4b2n9dq7",
                "TweetId": "1242914299632386049",
                "CreatedAt": "Wed Mar 25 20:40:35 +0000 2020",
                "CreatedAtIso": "2020-03-25T20:40:35.000Z",
                "RetweetCount": 24,
                "TweetedBy": "kedegr",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET-39VVXkAEh8qB.jpg",
                    "https://pbs.twimg.com/media/ET-39VfWsAItwQP.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 1637650700,
                        "FullName": "Civil Protection GR",
                        "UserName": "GSCP_GR"
                    },
                    {
                        "Id": 940221239930622000,
                        "FullName": "Υπουργείο Εσωτερικών | Ministry of Interior",
                        "UserName": "ypesgr"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΚΕΔΕ",
                    "Location": "Athens, Greece",
                    "Id": 238950139,
                    "UserName": "kedegr",
                    "FollowersCount": 1081,
                    "Description": "Κεντρική Ένωση Δήμων Ελλάδος | Ακαδημίας 65 & Γενναδίου 8 | 106 78, Αθήνα",
                    "StatusesCount": 2927,
                    "FriendsCount": 64,
                    "FavouritesCount": 11,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1232321097569271809/eOIyVTls_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "🔵Ενημέρωση διαπιστευμένων συντακτών υγείας από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR\nγια το νέο #COVIDー19 Καθηγητή @STsiodras\n\n@eody_gr #handshygiene @menoumespiti\n\n Δείτε περισσότερα 🔗https://t.co/bNVj3ZTwWJ https://t.co/jf53hI44zB",
            "TweetId": "1242900378057916419",
            "CreatedAt": "Wed Mar 25 19:45:16 +0000 2020",
            "CreatedAtIso": "2020-03-25T19:45:16.000Z",
            "RetweetCount": 8,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET-rPlYWoAMd8t0.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "⚠️Κήρυξη προσωρινής επιβολής περιορισμού🏡κατ’ οίκον (καραντίνα) των κατοίκων της Κοινότητας Εχίνου λόγω κορωνοϊού COVID-19\n\n@YpYgGR @eody_gr #Covid_19 #handshygiene #μένουμε_σπίτι\n\nΔείτε περισσότερα 🔗 https://t.co/fiF9bcK94Y https://t.co/AzQbnPGEH9",
            "TweetId": "1242890214948966400",
            "CreatedAt": "Wed Mar 25 19:04:53 +0000 2020",
            "CreatedAtIso": "2020-03-25T19:04:53.000Z",
            "RetweetCount": 27,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET-hzywXYAAGqUd.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\nΣήμερα οι ηρωικές μνήμες μας υπενθυμίζουν τις ηρωικές συμπεριφορές που είναι απαραίτητες τις ημέρες αυτές και τονίζουν την ανάγκη για αλληλεγγύη μεταξύ όλων μας στον κοινό αγώνα απέναντι στον κοινό εχθρό. \n\n@STsiodras",
            "TweetId": "1242884593541398529",
            "CreatedAt": "Wed Mar 25 18:42:33 +0000 2020",
            "CreatedAtIso": "2020-03-25T18:42:33.000Z",
            "RetweetCount": 8,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΝα παρακολουθείτε την υγεία σας σε συνεργασία πάντα με τον γιατρό σας. Χρειάζεται τακτική επικοινωνία με επαγγελματία υγείας. Να μένετε σε ένα καλά αεριζόμενο δωμάτιο που θα χρησιμοποιείται μόνο από εσάς.\n\n⁦@STsiodras⁩ ⁦ https://t.co/xUtBa8TeAA",
            "TweetId": "1242876880912613378",
            "CreatedAt": "Wed Mar 25 18:11:54 +0000 2020",
            "CreatedAtIso": "2020-03-25T18:11:54.000Z",
            "RetweetCount": 13,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: Ο Ν. Χαρδαλιάς ανακοίνωσε πως από τις 6 το απόγευμα σήμερα έως τις 7 Απριλίου κηρύχθηκε σε #καραντίνα η κοινότητα Εχίνου στη…",
            "TweetId": "1242861531081162752",
            "CreatedAt": "Wed Mar 25 17:10:54 +0000 2020",
            "CreatedAtIso": "2020-03-25T17:10:54.000Z",
            "RetweetCount": 6,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ο Ν. Χαρδαλιάς ανακοίνωσε πως από τις 6 το απόγευμα σήμερα έως τις 7 Απριλίου κηρύχθηκε σε #καραντίνα η κοινότητα Εχίνου στη Θράκη\n\n#κορονοϊός #coronavirus #COVID19 #COVID2019 #COVID19greece #StayHome #μενουμεσπίτι \n\nhttps://t.co/Yku1esbBh2",
                "TweetId": "1242852745226436610",
                "CreatedAt": "Wed Mar 25 16:36:00 +0000 2020",
                "CreatedAtIso": "2020-03-25T16:36:00.000Z",
                "RetweetCount": 6,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: 🔴Live @STsiodras: 78 νέα κρούσματα κορονοϊού στην Ελλάδα, 821 συνολικά, 22 νεκροί\n\nhttps://t.co/X0cqKR9o8r",
            "TweetId": "1242847378949931008",
            "CreatedAt": "Wed Mar 25 16:14:40 +0000 2020",
            "CreatedAtIso": "2020-03-25T16:14:40.000Z",
            "RetweetCount": 5,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": {
                "TweetText": "🔴Live @STsiodras: 78 νέα κρούσματα κορονοϊού στην Ελλάδα, 821 συνολικά, 22 νεκροί\n\nhttps://t.co/X0cqKR9o8r",
                "TweetId": "1242846734864265216",
                "CreatedAt": "Wed Mar 25 16:12:07 +0000 2020",
                "CreatedAtIso": "2020-03-25T16:12:07.000Z",
                "RetweetCount": 5,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\n➡️Δείτε live την ενημέρωση για #COVID2019 \n\n🔴https://t.co/iqwbkifR0x\n\n@vkontozamanis @nhardalias @STsiodras https://t.co/7Bk9fcBekF",
            "TweetId": "1242844761733705733",
            "CreatedAt": "Wed Mar 25 16:04:16 +0000 2020",
            "CreatedAtIso": "2020-03-25T16:04:16.000Z",
            "RetweetCount": 9,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET94tU7X0AAyCMR.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 3026268166,
                    "FullName": "Βασίλης Κοντοζαμάνης",
                    "UserName": "vkontozamanis"
                },
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @EU_Health: We're living in exceptional times &amp; facing unprecedented personal &amp; societal challenges. \nWe know it's not always easy.\nBut…",
            "TweetId": "1242842202537177088",
            "CreatedAt": "Wed Mar 25 15:54:06 +0000 2020",
            "CreatedAtIso": "2020-03-25T15:54:06.000Z",
            "RetweetCount": 34,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 606325697,
                    "FullName": "EU_Health",
                    "UserName": "EU_Health"
                }
            ],
            "OriginalTweet": {
                "TweetText": "We're living in exceptional times &amp; facing unprecedented personal &amp; societal challenges. \nWe know it's not always easy.\nBut remember: the faster we all comply with the measures that have been put in place, the faster we will be able to overcome this.\n#COVID19 https://t.co/BuMwYOkoF6",
                "TweetId": "1242841431615705089",
                "CreatedAt": "Wed Mar 25 15:51:02 +0000 2020",
                "CreatedAtIso": "2020-03-25T15:51:02.000Z",
                "RetweetCount": 34,
                "TweetedBy": "EU_Health",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET91lUBWAAA8L_z.jpg"
                ],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "EU_Health",
                    "Location": "Brussels, Europe",
                    "Id": 606325697,
                    "UserName": "EU_Health",
                    "FollowersCount": 67161,
                    "Description": "EU Commission's DG Health & Food Safety (SANTE). We work to protect health, prevent diseases & strengthen health systems. RT ≠ endorsement. Food tweets @Food_EU",
                    "StatusesCount": 18731,
                    "FriendsCount": 3109,
                    "FavouritesCount": 6691,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/907604041215201280/IuRPoVdN_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @menoumespiti: Χρόνια Πολλά Ελλάδα! \nΕνωμένοι θα νικήσουμε! \n#MenoumeSpiti #Coronavirus #Covid19 https://t.co/BiQMhHlAjq",
            "TweetId": "1242794197255667715",
            "CreatedAt": "Wed Mar 25 12:43:21 +0000 2020",
            "CreatedAtIso": "2020-03-25T12:43:21.000Z",
            "RetweetCount": 66,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET8zHI2XsAMtgN7.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Χρόνια Πολλά Ελλάδα! \nΕνωμένοι θα νικήσουμε! \n#MenoumeSpiti #Coronavirus #Covid19 https://t.co/BiQMhHlAjq",
                "TweetId": "1242768226301468672",
                "CreatedAt": "Wed Mar 25 11:00:09 +0000 2020",
                "CreatedAtIso": "2020-03-25T11:00:09.000Z",
                "RetweetCount": 66,
                "TweetedBy": "menoumespiti",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET8zHI2XsAMtgN7.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Μένουμε Σπίτι",
                    "Location": "Ελλάς",
                    "Id": 1239125368101113900,
                    "UserName": "menoumespiti",
                    "FollowersCount": 1459,
                    "Description": "Επίσημος Λογαριασμός Καμπάνιας Υπουργείου Υγείας για τον Κορονοϊό.",
                    "StatusesCount": 35,
                    "FriendsCount": 6,
                    "FavouritesCount": 4,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1239132161099399168/QorWgq58_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @WHO: #BeActive and stay #HealthyAtHome ! Here are some physical activities you can do at home during #COVID19 outbreak:\n\n🤸‍Try exercise…",
            "TweetId": "1242747332409556995",
            "CreatedAt": "Wed Mar 25 09:37:07 +0000 2020",
            "CreatedAtIso": "2020-03-25T09:37:07.000Z",
            "RetweetCount": 4752,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 14499829,
                    "FullName": "World Health Organization (WHO)",
                    "UserName": "WHO"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#BeActive and stay #HealthyAtHome ! Here are some physical activities you can do at home during #COVID19 outbreak:\n\n🤸‍Try exercise classes online\n💃Dance to music\n🎮Play active video games\n🤾Try skipping rope\n💪Do some muscle strength &amp; balance training\n\n#coronavirus https://t.co/1lt300HYhK",
                "TweetId": "1242738384772239360",
                "CreatedAt": "Wed Mar 25 09:01:34 +0000 2020",
                "CreatedAtIso": "2020-03-25T09:01:34.000Z",
                "RetweetCount": 4752,
                "TweetedBy": "WHO",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET8X-NJWsAE-4ql.jpg"
                ],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "World Health Organization (WHO)",
                    "Location": "Geneva, Switzerland",
                    "Id": 14499829,
                    "UserName": "WHO",
                    "FollowersCount": 6801076,
                    "Description": "We are the #UnitedNations’ health agency. We are committed to achieving better health for everyone, everywhere - #HealthForAll",
                    "StatusesCount": 49288,
                    "FriendsCount": 1716,
                    "FavouritesCount": 10546,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/875476478988886016/_l61qZdR_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Ένας όμορφος τρόπος να μεταδώσουμε το μήνυμα. Για να στηρίξουμε όσους δίνουν τη μάχη στην πρώτη γραμμή, μένουμε υγιείς…",
            "TweetId": "1242732718196232192",
            "CreatedAt": "Wed Mar 25 08:39:03 +0000 2020",
            "CreatedAtIso": "2020-03-25T08:39:03.000Z",
            "RetweetCount": 506,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ένας όμορφος τρόπος να μεταδώσουμε το μήνυμα. Για να στηρίξουμε όσους δίνουν τη μάχη στην πρώτη γραμμή, μένουμε υγιείς, μένουμε αισιόδοξοι, μένουμε σπίτι! \n\nΕυχαριστούμε την εταιρεία, τους καλλιτέχνες και συντελεστές και φυσικά, την οικογένεια Κηλαηδόνη. https://t.co/6n12T6DG7L",
                "TweetId": "1242525998152810496",
                "CreatedAt": "Tue Mar 24 18:57:37 +0000 2020",
                "CreatedAtIso": "2020-03-24T18:57:37.000Z",
                "RetweetCount": 506,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Είναι η στιγμή, όπως έλεγε και ο Μακρυγιάννης, που είμαστε στο «εμείς» και όχι στο «εγώ». \nΧρόνια Πολλά Ελλάδα 🇬🇷 https://t.…",
            "TweetId": "1242718545835896832",
            "CreatedAt": "Wed Mar 25 07:42:44 +0000 2020",
            "CreatedAtIso": "2020-03-25T07:42:44.000Z",
            "RetweetCount": 119,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Είναι η στιγμή, όπως έλεγε και ο Μακρυγιάννης, που είμαστε στο «εμείς» και όχι στο «εγώ». \nΧρόνια Πολλά Ελλάδα 🇬🇷 https://t.co/t0f1ygQRQG",
                "TweetId": "1242717182846545921",
                "CreatedAt": "Wed Mar 25 07:37:19 +0000 2020",
                "CreatedAtIso": "2020-03-25T07:37:19.000Z",
                "RetweetCount": 119,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET8Er93WAAET6D8.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \n\nΑς αφήσουμε όλοι τα τερτίπια, ας αφήσουμε τις προφάσεις και τις φθηνές δικαιολογίες και ας μείνουμε σπίτι.…",
            "TweetId": "1242591824558075905",
            "CreatedAt": "Tue Mar 24 23:19:11 +0000 2020",
            "CreatedAtIso": "2020-03-24T23:19:11.000Z",
            "RetweetCount": 33,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \n\nΑς αφήσουμε όλοι τα τερτίπια, ας αφήσουμε τις προφάσεις και τις φθηνές δικαιολογίες και ας μείνουμε σπίτι. Μένουμε σπίτι και μόνο σπίτι. \n⁦@nhardalias⁩ ⁦@STsiodras⁩  https://t.co/KosFkyLWEz",
                "TweetId": "1242539342779887621",
                "CreatedAt": "Tue Mar 24 19:50:39 +0000 2020",
                "CreatedAtIso": "2020-03-24T19:50:39.000Z",
                "RetweetCount": 33,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 86951686,
                        "FullName": "Νίκος Γ. Χαρδαλιάς",
                        "UserName": "nhardalias"
                    },
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \n\n1.7 δισεκατομμύρια άνθρωποι (περίπου 20% του παγκόσμιου πληθυσμού) είναι σε κατάσταση αυτοπεριορισμού στο σ…",
            "TweetId": "1242591769654591489",
            "CreatedAt": "Tue Mar 24 23:18:58 +0000 2020",
            "CreatedAtIso": "2020-03-24T23:18:58.000Z",
            "RetweetCount": 7,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \n\n1.7 δισεκατομμύρια άνθρωποι (περίπου 20% του παγκόσμιου πληθυσμού) είναι σε κατάσταση αυτοπεριορισμού στο σπίτι. Το τελευταίο 24ωρο χώρες  που ακολουθούν τις οδηγίες για αυτοπεριορισμό είναι οι ΗΠΑ και το Ηνωμένο Βασίλειο.",
                "TweetId": "1242487459449114624",
                "CreatedAt": "Tue Mar 24 16:24:29 +0000 2020",
                "CreatedAtIso": "2020-03-24T16:24:29.000Z",
                "RetweetCount": 7,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \nΓια τους ανθρώπους που μένουν σπίτι κι εμφανίζουν συμπτώματα παρακαλώ να δείτε στο διαδίκτυο τις οδηγίες του…",
            "TweetId": "1242591750641901573",
            "CreatedAt": "Tue Mar 24 23:18:54 +0000 2020",
            "CreatedAtIso": "2020-03-24T23:18:54.000Z",
            "RetweetCount": 19,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \nΓια τους ανθρώπους που μένουν σπίτι κι εμφανίζουν συμπτώματα παρακαλώ να δείτε στο διαδίκτυο τις οδηγίες του ΕΟΔΥ για το πώς πρέπει να παρακολουθείτε την υγεία σας και σε ποιες περιπτώσεις πρέπει να επικοινωνείτε με τον γιατρό σας.",
                "TweetId": "1242486996737679363",
                "CreatedAt": "Tue Mar 24 16:22:38 +0000 2020",
                "CreatedAtIso": "2020-03-24T16:22:38.000Z",
                "RetweetCount": 19,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \nΑυτή είναι μια από τις κρίσιμες εβδομάδες στην απόκριση έναντι μιας πανδημίας που εξαπλώνεται ταχύτατα σε όλ…",
            "TweetId": "1242591733134831618",
            "CreatedAt": "Tue Mar 24 23:18:50 +0000 2020",
            "CreatedAtIso": "2020-03-24T23:18:50.000Z",
            "RetweetCount": 8,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \nΑυτή είναι μια από τις κρίσιμες εβδομάδες στην απόκριση έναντι μιας πανδημίας που εξαπλώνεται ταχύτατα σε όλον τον κόσμο. Η Νέα Υόρκη αρχίζει να γίνεται ένα από τα σημαντικά κέντρα μετάδοσης του ιού με περισσότερες από 12000 περιπτώσεις και 100 νεκρούς.",
                "TweetId": "1242486656852037637",
                "CreatedAt": "Tue Mar 24 16:21:17 +0000 2020",
                "CreatedAtIso": "2020-03-24T16:21:17.000Z",
                "RetweetCount": 8,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #Briefing_COVID19 \nΔύο ημέρες στην σειρά υπάρχει μειωμένος αριθμός καταγραφών της νόσου και θανάτων στην Ιταλία.\nΣτην επαρχία H…",
            "TweetId": "1242591713941692417",
            "CreatedAt": "Tue Mar 24 23:18:45 +0000 2020",
            "CreatedAtIso": "2020-03-24T23:18:45.000Z",
            "RetweetCount": 8,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#Briefing_COVID19 \nΔύο ημέρες στην σειρά υπάρχει μειωμένος αριθμός καταγραφών της νόσου και θανάτων στην Ιταλία.\nΣτην επαρχία Hubei που ήταν το επίκεντρο της επιδημίας ο περιορισμός σταματά την Τετάρτη εκτός από την πόλη Wuhan όπου ο περιορισμός θα σταματήσει στις 8/4\n@STsiodras",
                "TweetId": "1242486390274678784",
                "CreatedAt": "Tue Mar 24 16:20:14 +0000 2020",
                "CreatedAtIso": "2020-03-24T16:20:14.000Z",
                "RetweetCount": 8,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 976133904091533300,
                        "FullName": "Sotirios Tsiodras",
                        "UserName": "STsiodras"
                    }
                ],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "🔵 Ενημέρωση διαπιστευμένων συντακτών υγείας από τον Υφυπουργό Πολιτικής Προστασίας &amp; Διαχείρισης Κρίσεων @nhardalias &amp; τον εκπρόσωπο του @YpYgGR\nγια το νέο #COVIDー19 Καθηγητή @STsiodras\n\n@eody_gr #handshygiene @menoumespiti\n \nΔείτε περισσότερα 🔗 https://t.co/zZLaQ3kJdE https://t.co/DmOOSW4FAE",
            "TweetId": "1242542765717762054",
            "CreatedAt": "Tue Mar 24 20:04:15 +0000 2020",
            "CreatedAtIso": "2020-03-24T20:04:15.000Z",
            "RetweetCount": 11,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET5lzNTWsAYokFO.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Ένας όμορφος τρόπος να μεταδώσουμε το μήνυμα. Για να στηρίξουμε όσους δίνουν τη μάχη στην πρώτη γραμμή, μένουμε υγιείς…",
            "TweetId": "1242541472865542147",
            "CreatedAt": "Tue Mar 24 19:59:07 +0000 2020",
            "CreatedAtIso": "2020-03-24T19:59:07.000Z",
            "RetweetCount": 506,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ένας όμορφος τρόπος να μεταδώσουμε το μήνυμα. Για να στηρίξουμε όσους δίνουν τη μάχη στην πρώτη γραμμή, μένουμε υγιείς, μένουμε αισιόδοξοι, μένουμε σπίτι! \n\nΕυχαριστούμε την εταιρεία, τους καλλιτέχνες και συντελεστές και φυσικά, την οικογένεια Κηλαηδόνη. https://t.co/6n12T6DG7L",
                "TweetId": "1242525998152810496",
                "CreatedAt": "Tue Mar 24 18:57:37 +0000 2020",
                "CreatedAtIso": "2020-03-24T18:57:37.000Z",
                "RetweetCount": 506,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\nΑς αφήσουμε όλοι τα τερτίπια, ας αφήσουμε τις προφάσεις και τις φθηνές δικαιολογίες και ας μείνουμε σπίτι. Μένουμε σπίτι και μόνο σπίτι. \n⁦@nhardalias⁩ ⁦@STsiodras⁩  https://t.co/KosFkyLWEz",
            "TweetId": "1242539342779887621",
            "CreatedAt": "Tue Mar 24 19:50:39 +0000 2020",
            "CreatedAtIso": "2020-03-24T19:50:39.000Z",
            "RetweetCount": 33,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "‼️ Ενημέρωση σχετικά με την μη πραγματοποίηση πτήσεων🛫 από το Ηνωμένο Βασίλειο 🇬🇧 προς την Ελλάδα 🇬🇷\n\nΠερισσότερα🔗 https://t.co/0NrmldIBJj https://t.co/MnyRQhSNXz",
            "TweetId": "1242529491701899264",
            "CreatedAt": "Tue Mar 24 19:11:30 +0000 2020",
            "CreatedAtIso": "2020-03-24T19:11:30.000Z",
            "RetweetCount": 14,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET5Z5QXXQAI776V.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\nΣήμερα ανακοινώνουμε 48 νέα  κρούσματα του νέου κορωνοιού στην χώρα. Ο συνολικός αριθμός των κρουσμάτων είναι 743.\n-134 συνεχίζουν να νοσηλεύονται\n-45 συνεχίζουν να νοσηλεύονται σε μονάδα δια-σωληνωμένοι\n-32 συμπολίτες μας έχουν πάρει εξιτήριο",
            "TweetId": "1242494679624663046",
            "CreatedAt": "Tue Mar 24 16:53:10 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:53:10.000Z",
            "RetweetCount": 6,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @amna_news: #LIVE #Χαρδαλιάς Το ωράριο των σούπερ μάρκετ Δευτέρα - Παρασκευή 07.00 - 21.00, το Σάββατο 07.00 - 20.00 και την Κυριακή κλε…",
            "TweetId": "1242489034234093569",
            "CreatedAt": "Tue Mar 24 16:30:44 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:30:44.000Z",
            "RetweetCount": 9,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#LIVE #Χαρδαλιάς Το ωράριο των σούπερ μάρκετ Δευτέρα - Παρασκευή 07.00 - 21.00, το Σάββατο 07.00 - 20.00 και την Κυριακή κλειστά \n\n #COVIDー19 #COVID2019 #COVID19 #MenoumeSpiti #Μένουμε_σπίτι #ΜένουμεΣπίτι #StayAtHome",
                "TweetId": "1242484545879826434",
                "CreatedAt": "Tue Mar 24 16:12:54 +0000 2020",
                "CreatedAtIso": "2020-03-24T16:12:54.000Z",
                "RetweetCount": 9,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "250058740",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\n1.7 δισεκατομμύρια άνθρωποι (περίπου 20% του παγκόσμιου πληθυσμού) είναι σε κατάσταση αυτοπεριορισμού στο σπίτι. Το τελευταίο 24ωρο χώρες  που ακολουθούν τις οδηγίες για αυτοπεριορισμό είναι οι ΗΠΑ και το Ηνωμένο Βασίλειο.",
            "TweetId": "1242487459449114624",
            "CreatedAt": "Tue Mar 24 16:24:29 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:24:29.000Z",
            "RetweetCount": 7,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΓια τους ανθρώπους που μένουν σπίτι κι εμφανίζουν συμπτώματα παρακαλώ να δείτε στο διαδίκτυο τις οδηγίες του ΕΟΔΥ για το πώς πρέπει να παρακολουθείτε την υγεία σας και σε ποιες περιπτώσεις πρέπει να επικοινωνείτε με τον γιατρό σας.",
            "TweetId": "1242486996737679363",
            "CreatedAt": "Tue Mar 24 16:22:38 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:22:38.000Z",
            "RetweetCount": 19,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΑυτή είναι μια από τις κρίσιμες εβδομάδες στην απόκριση έναντι μιας πανδημίας που εξαπλώνεται ταχύτατα σε όλον τον κόσμο. Η Νέα Υόρκη αρχίζει να γίνεται ένα από τα σημαντικά κέντρα μετάδοσης του ιού με περισσότερες από 12000 περιπτώσεις και 100 νεκρούς.",
            "TweetId": "1242486656852037637",
            "CreatedAt": "Tue Mar 24 16:21:17 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:21:17.000Z",
            "RetweetCount": 8,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΔύο ημέρες στην σειρά υπάρχει μειωμένος αριθμός καταγραφών της νόσου και θανάτων στην Ιταλία.\nΣτην επαρχία Hubei που ήταν το επίκεντρο της επιδημίας ο περιορισμός σταματά την Τετάρτη εκτός από την πόλη Wuhan όπου ο περιορισμός θα σταματήσει στις 8/4\n@STsiodras",
            "TweetId": "1242486390274678784",
            "CreatedAt": "Tue Mar 24 16:20:14 +0000 2020",
            "CreatedAtIso": "2020-03-24T16:20:14.000Z",
            "RetweetCount": 8,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @hans_kluge: Congratulations Minister @Vkikilias for the bold community mobilization efforts by the Greek Ministry of Health @YpYgGR &amp; G…",
            "TweetId": "1242462606952222721",
            "CreatedAt": "Tue Mar 24 14:45:43 +0000 2020",
            "CreatedAtIso": "2020-03-24T14:45:43.000Z",
            "RetweetCount": 164,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 984728556625453000,
                    "FullName": "Hans Kluge",
                    "UserName": "hans_kluge"
                },
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Congratulations Minister @Vkikilias for the bold community mobilization efforts by the Greek Ministry of Health @YpYgGR &amp; Government to contain &amp; suppress #COVID19 outbreak. @WHO_Europe fully supports. https://t.co/5mfguquqBo",
                "TweetId": "1242125077208014848",
                "CreatedAt": "Mon Mar 23 16:24:30 +0000 2020",
                "CreatedAtIso": "2020-03-23T16:24:30.000Z",
                "RetweetCount": 164,
                "TweetedBy": "hans_kluge",
                "MediaUrls": [],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 54283324,
                        "FullName": "Vassilis Kikilias",
                        "UserName": "Vkikilias"
                    },
                    {
                        "Id": 1598930275,
                        "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                        "UserName": "YpYgGR"
                    },
                    {
                        "Id": 125403342,
                        "FullName": "WHO/Europe",
                        "UserName": "WHO_Europe"
                    }
                ],
                "UserDetails": {
                    "FullName": "Hans Kluge",
                    "Location": "",
                    "Id": 984728556625453000,
                    "UserName": "hans_kluge",
                    "FollowersCount": 4916,
                    "Description": "Regional Director @WHO_Europe. Passionate about improving health for all. Dad, husband, runner.",
                    "StatusesCount": 492,
                    "FriendsCount": 255,
                    "FavouritesCount": 532,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1105802610492219392/Ku0Kqieu_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Nοτιοανατολικοί έως βορειοανατολικοί άνεμοι, με ένταση 7 με 8 μποφόρ θα πνέουν στις περισσότερες περιοχές, οι οποίοι την Τετάρτη στο Ιόνιο θα φτάσουν τα 9 μποφόρ. Σταδιακή εξασθένηση προβλέπεται την Παρασκευή από τα δυτικά. Προγνωστικά δεδομένα από την @EMY_HNMS  \n@EmyEmk https://t.co/N325nNSSk3",
            "TweetId": "1242444595662917634",
            "CreatedAt": "Tue Mar 24 13:34:09 +0000 2020",
            "CreatedAtIso": "2020-03-24T13:34:09.000Z",
            "RetweetCount": 5,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1242444161867026434/pu/img/WRv7KEwKQ3UWMTx_.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 827844841,
                    "FullName": "EMY",
                    "UserName": "EMY_HNMS"
                },
                {
                    "Id": 1066978850352111600,
                    "FullName": "EMY_EMK",
                    "UserName": "EmyEmk"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4398,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 105,
                "FriendsCount": 30,
                "FavouritesCount": 65,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "⚠️Έκτακτο:Επιδείνωση του καιρού από την Τετάρτη 25/03 με:\n❗️θυελλώδεις ανέμους 💨\n❗️ισχυρές βροχές &amp; καταιγίδες⛈️\n❗️χιονοπτώσεις 🌨️\nΠιο αναλυτικά 🔗 https://t.co/DD7Yt7RC6y\n\n@EMY_HNMS @pyrosvestiki @hellenicpolice https://t.co/sWUfE6Ii5K",
            "TweetId": "1242439246285332481",
            "CreatedAt": "Tue Mar 24 13:12:54 +0000 2020",
            "CreatedAtIso": "2020-03-24T13:12:54.000Z",
            "RetweetCount": 31,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET4HntAWAAMMcEp.jpg",
                "https://pbs.twimg.com/media/ET4HnsxXsAAq54B.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 827844841,
                    "FullName": "EMY",
                    "UserName": "EMY_HNMS"
                },
                {
                    "Id": 158003436,
                    "FullName": "Πυροσβεστικό Σώμα",
                    "UserName": "pyrosvestiki"
                },
                {
                    "Id": 119014566,
                    "FullName": "Ελληνική Αστυνομία",
                    "UserName": "hellenicpolice"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Στη μάχη για την αντιμετώπιση του κορονοϊού κανείς δεν περισσεύει. \nΣτηρίζουμε ο ένας τον άλλον και όλοι μαζί αυτή τη μεγάλη…",
            "TweetId": "1242425308462137345",
            "CreatedAt": "Tue Mar 24 12:17:31 +0000 2020",
            "CreatedAtIso": "2020-03-24T12:17:31.000Z",
            "RetweetCount": 58,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Στη μάχη για την αντιμετώπιση του κορονοϊού κανείς δεν περισσεύει. \nΣτηρίζουμε ο ένας τον άλλον και όλοι μαζί αυτή τη μεγάλη εθνική προσπάθεια. \n\n#ethelontes_COVID19 #COVIDー19 \n\n➡️https://t.co/HlcyWQmiDK https://t.co/v9n276HR2j",
                "TweetId": "1242407755945857024",
                "CreatedAt": "Tue Mar 24 11:07:46 +0000 2020",
                "CreatedAtIso": "2020-03-24T11:07:46.000Z",
                "RetweetCount": 58,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1242407706583056386/pu/img/Aark2YYyejsipLZx.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "Γίνε εθελοντής για την προστασία της Δημόσιας Υγείας\n#COVID19 #coronavirus https://t.co/CPYcYweZLf",
            "TweetId": "1242418377961934850",
            "CreatedAt": "Tue Mar 24 11:49:58 +0000 2020",
            "CreatedAtIso": "2020-03-24T11:49:58.000Z",
            "RetweetCount": 12,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1242418332671893505/pu/img/F4E7AU9XHUsAGCB5.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "Από τα νοτιοδυτικά θα ξεκινήσει η μεταβολή του καιρού στη χώρα μας το βράδυ της Τετάρτης και θα επηρεάσει μεγάλο μέρος με βροχές καταιγίδες , θυελλώσεις ανέμους και χιόνια κυρίως στα ορεινά. Έχει εκδοθεί #ΕΔΕΚ #ΕΚΤΑΚΤΟ_ΔΕΛΤΙΟ\nhttps://t.co/KIY0KXmEU2 https://t.co/8kCSqDad1C",
            "TweetId": "1242414200384823296",
            "CreatedAt": "Tue Mar 24 11:33:22 +0000 2020",
            "CreatedAtIso": "2020-03-24T11:33:22.000Z",
            "RetweetCount": 11,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET3v9dJX0AIC5go.jpg",
                "https://pbs.twimg.com/media/ET3v-djWkAASmhj.jpg",
                "https://pbs.twimg.com/media/ET3wAJEXsAAw2-M.jpg",
                "https://pbs.twimg.com/media/ET3wA6eWsAAIh_X.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4398,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 105,
                "FriendsCount": 30,
                "FavouritesCount": 65,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "Έκτακτο Δελτίο Επιδείνωσης Καιρού (ΕΔΕΚ)\nhttps://t.co/KIY0KXmEU2\nΔείτε τα ύψη υετού ανά 6ωρο έως το μεσημέρι του Σαββάτου . https://t.co/PB1jkXUT9S",
            "TweetId": "1242411891470852096",
            "CreatedAt": "Tue Mar 24 11:24:12 +0000 2020",
            "CreatedAtIso": "2020-03-24T11:24:12.000Z",
            "RetweetCount": 21,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1242411467544166400/pu/img/0qwUZZqD6EgEomYu.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4398,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 105,
                "FriendsCount": 30,
                "FavouritesCount": 65,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Στη μάχη για την αντιμετώπιση του κορονοϊού κανείς δεν περισσεύει. \nΣτηρίζουμε ο ένας τον άλλον και όλοι μαζί αυτή τη μεγάλη…",
            "TweetId": "1242408595146358784",
            "CreatedAt": "Tue Mar 24 11:11:06 +0000 2020",
            "CreatedAtIso": "2020-03-24T11:11:06.000Z",
            "RetweetCount": 58,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Στη μάχη για την αντιμετώπιση του κορονοϊού κανείς δεν περισσεύει. \nΣτηρίζουμε ο ένας τον άλλον και όλοι μαζί αυτή τη μεγάλη εθνική προσπάθεια. \n\n#ethelontes_COVID19 #COVIDー19 \n\n➡️https://t.co/HlcyWQmiDK https://t.co/v9n276HR2j",
                "TweetId": "1242407755945857024",
                "CreatedAt": "Tue Mar 24 11:07:46 +0000 2020",
                "CreatedAtIso": "2020-03-24T11:07:46.000Z",
                "RetweetCount": 58,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1242407706583056386/pu/img/Aark2YYyejsipLZx.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #COVID19 ➡️Οδηγίες Ψυχολογικής Υποστήριξης των Πολιτών. #μενουμε_σπιτι  https://t.co/UtznfMgVyP",
            "TweetId": "1242377013249400832",
            "CreatedAt": "Tue Mar 24 09:05:36 +0000 2020",
            "CreatedAtIso": "2020-03-24T09:05:36.000Z",
            "RetweetCount": 73,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#COVID19 ➡️Οδηγίες Ψυχολογικής Υποστήριξης των Πολιτών. #μενουμε_σπιτι  https://t.co/UtznfMgVyP",
                "TweetId": "1242019752899424259",
                "CreatedAt": "Mon Mar 23 09:25:59 +0000 2020",
                "CreatedAtIso": "2020-03-23T09:25:59.000Z",
                "RetweetCount": 73,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "250.000 χειρουργικές μάσκες για τις ανάγκες των νοσοκομείων του Ε.Σ.Υ., δωρεά της εταιρείας «Stoiximan».  https://t.co/pSwvYw3Dj3",
            "TweetId": "1242368911015915520",
            "CreatedAt": "Tue Mar 24 08:33:25 +0000 2020",
            "CreatedAtIso": "2020-03-24T08:33:25.000Z",
            "RetweetCount": 77,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @RealPitino: Kyriakos Mitsotakis of Greece has done an awesome job as Prime Minister. Shut down everything and has kept the death toll t…",
            "TweetId": "1242205597757513728",
            "CreatedAt": "Mon Mar 23 21:44:28 +0000 2020",
            "CreatedAtIso": "2020-03-23T21:44:28.000Z",
            "RetweetCount": 646,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1021569306851729400,
                    "FullName": "Rick Pitino",
                    "UserName": "RealPitino"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Kyriakos Mitsotakis of Greece has done an awesome job as Prime Minister. Shut down everything and has kept the death toll to under 20 people. So happy to hear that with this dreaded virus.",
                "TweetId": "1242181971113127937",
                "CreatedAt": "Mon Mar 23 20:10:35 +0000 2020",
                "CreatedAtIso": "2020-03-23T20:10:35.000Z",
                "RetweetCount": 646,
                "TweetedBy": "RealPitino",
                "MediaUrls": [],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Rick Pitino",
                    "Location": "",
                    "Id": 1021569306851729400,
                    "UserName": "RealPitino",
                    "FollowersCount": 63270,
                    "Description": "2013 Basketball Hall of Fame. Two time National Champion & one of two coaches to take three different schools to the Final Four. Book PITINO: MY STORY out now",
                    "StatusesCount": 370,
                    "FriendsCount": 15,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1042851456666152960/TtpxsM7r_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "✅Διευκρινήσεις του @nhardalias σχετικά με την 🚫απαγόρευση μετακινήσεων πολιτών λόγω #COVIDー19\n \n @menoumespiti #μένουμε_σπίτι\n\nΠερισσότερα 🔗 https://t.co/RU3Mu7a5zE https://t.co/qkyTlHCEU6",
            "TweetId": "1242191918383222786",
            "CreatedAt": "Mon Mar 23 20:50:06 +0000 2020",
            "CreatedAtIso": "2020-03-23T20:50:06.000Z",
            "RetweetCount": 20,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ET0m73BWAAAN-Y-.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Had a very interesting conversation with @NAChristakis about our action plan for COVID-19 and our health system. We're…",
            "TweetId": "1242184115799105537",
            "CreatedAt": "Mon Mar 23 20:19:06 +0000 2020",
            "CreatedAtIso": "2020-03-23T20:19:06.000Z",
            "RetweetCount": 419,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                },
                {
                    "Id": 788363167,
                    "FullName": "Nicholas A. Christakis",
                    "UserName": "NAChristakis"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Had a very interesting conversation with @NAChristakis about our action plan for COVID-19 and our health system. We're basing our strategies on sound scientific advice, and Greece is very privileged to have such eminent scientists to call upon, wherever they may be. https://t.co/vh3S4HpFKd",
                "TweetId": "1242180621784494087",
                "CreatedAt": "Mon Mar 23 20:05:13 +0000 2020",
                "CreatedAtIso": "2020-03-23T20:05:13.000Z",
                "RetweetCount": 419,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ET0cneXWAAgdiYq.jpg"
                ],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 788363167,
                        "FullName": "Nicholas A. Christakis",
                        "UserName": "NAChristakis"
                    }
                ],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Από σήμερα ισχύει ο αυστηρός περιορισμός της κυκλοφορίας σε όλη την Ελλάδα. Ας γίνει το κάθε σπίτι ένα οχυρό ζωής και…",
            "TweetId": "1242184082257252353",
            "CreatedAt": "Mon Mar 23 20:18:58 +0000 2020",
            "CreatedAtIso": "2020-03-23T20:18:58.000Z",
            "RetweetCount": 599,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Από σήμερα ισχύει ο αυστηρός περιορισμός της κυκλοφορίας σε όλη την Ελλάδα. Ας γίνει το κάθε σπίτι ένα οχυρό ζωής και ας μείνει η πόρτα όλων μας κλειστή στον κορονοϊό. Μένουμε υγιείς, μένουμε ασφαλείς, μένουμε στο σπίτι. \n\nΓια πληροφορίες, επισκεφτείτε το https://t.co/4WigIMaEOV https://t.co/eGFAl0F0Gp",
                "TweetId": "1242041952041926657",
                "CreatedAt": "Mon Mar 23 10:54:12 +0000 2020",
                "CreatedAtIso": "2020-03-23T10:54:12.000Z",
                "RetweetCount": 599,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETyeKFYXYAEIxL6.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19\nΕλπίζω ότι θα συνεχίσουμε εντός των προβλέψεων και να μην περάσουμε πιο δύσκολες καταστάσεις. Ο αγώνας όλων μας συνεχίζεται. Σήμερα είναι η μάχη που κέρδισε μια νεαρή μητέρα που γέννησε ένα υγιέστατο αγοράκι.\n⁦@STsiodras⁩ ⁦ https://t.co/Cfu39XB5bA",
            "TweetId": "1242183090711203840",
            "CreatedAt": "Mon Mar 23 20:15:02 +0000 2020",
            "CreatedAtIso": "2020-03-23T20:15:02.000Z",
            "RetweetCount": 5,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 976133904091533300,
                    "FullName": "Sotirios Tsiodras",
                    "UserName": "STsiodras"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΘα ήθελα να ζητήσω για μια ακόμα φορά από όλους τους Έλληνες να επιδείξουν κοινωνική ευθύνη, αλληλεγγύη &amp; πατριωτισμό.\nΝα μείνουμε σπίτι. \nΝα προστατεύσουμε τις ευπαθείς ομάδες. Να προστατεύσουμε τους ανθρώπους μας. \nΝα στηρίξουμε ο ένας τον άλλον.\n@Vkikilias",
            "TweetId": "1242157669143777281",
            "CreatedAt": "Mon Mar 23 18:34:01 +0000 2020",
            "CreatedAtIso": "2020-03-23T18:34:01.000Z",
            "RetweetCount": 50,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΕκ μέρους της ελληνικής Kυβέρνησης, θέλω να ευχαριστήσω τους δωρητές, οι οποίοι διαρκώς προσφέρουν ο καθένας την δική του σημαντική βοήθεια στο Εθνικό Σύστημα Υγείας, στα νοσοκομεία μας, συμβάλλοντας σε αυτή την μεγάλη εθνική προσπάθεια.\n@Vkikilias",
            "TweetId": "1242157132994285568",
            "CreatedAt": "Mon Mar 23 18:31:53 +0000 2020",
            "CreatedAtIso": "2020-03-23T18:31:53.000Z",
            "RetweetCount": 21,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΈχουν αναλάβει υπηρεσία 176 γιατροί &amp; 733 νοσηλευτές-λοιπό προσωπικό. Έχουν ήδη εγκριθεί ακόμα 2.145 προσλήψεις (431 γιατροί και 1.714 νοσηλευτές-λοιπό προσωπικό).\nΑυτοί θα προσληφθούν εντός του επόμενου δεκαημέρου.\n@Vkikilias",
            "TweetId": "1242156808698920960",
            "CreatedAt": "Mon Mar 23 18:30:36 +0000 2020",
            "CreatedAtIso": "2020-03-23T18:30:36.000Z",
            "RetweetCount": 25,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΣε αυτή τη φάση το νοσοκομείο ΠΑΜΜΑΚΑΡΙΣΤΟΣ με 60 κλίνες, το ΝΙΜΤΣ, πτέρυγες στο ΑΓΙΑ ΒΑΡΒΑΡΑ με 56 κλίνες και το ιδιωτικό θεραπευτήριο ΑΤΤΙΚΑ στην Ελευσίνα με 300 κλίνες, θα νοσηλεύουν αποκλειστικά ασθενείς με COVID-19.\n@Vkikilias",
            "TweetId": "1242156312613588992",
            "CreatedAt": "Mon Mar 23 18:28:37 +0000 2020",
            "CreatedAtIso": "2020-03-23T18:28:37.000Z",
            "RetweetCount": 18,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \nΟι κλίνες που έχουν αναπτυχθεί ήδη για την απλή νοσηλεία ασθενών με #COVIDー19 είναι 2.158. Αυτοί οι αριθμοί θα συνεχίσουν να αυξάνονται, με βάση τις ανάγκες και το πλάνο που έχει εκπονήσει το Υπουργείο Υγείας.\n@Vkikilias",
            "TweetId": "1242156046841450496",
            "CreatedAt": "Mon Mar 23 18:27:34 +0000 2020",
            "CreatedAtIso": "2020-03-23T18:27:34.000Z",
            "RetweetCount": 42,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Ο Εθνικός Οργανισμός Δημόσιας Υγείας πραγματοποίησε σε συνεργασία με την ΓΓΠΠ έλεγχο σε επιβάτες προεπιλεγμένων πτήσεων από Ηνωμένο Βασίλειο και Ισπανία.\nΣυνεχίζουμε την καθημερινή προσπάθεια περιορισμού της διασποράς της νόσου COVID-19. #ΕΟΔΥ https://t.co/0wUSGA0BQL",
            "TweetId": "1242148218009509896",
            "CreatedAt": "Mon Mar 23 17:56:27 +0000 2020",
            "CreatedAtIso": "2020-03-23T17:56:27.000Z",
            "RetweetCount": 5,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETz_GV_XgAArQfQ.jpg",
                "https://pbs.twimg.com/media/ETz_HimWkAEG2hy.jpg",
                "https://pbs.twimg.com/media/ETz_IxbWoAA4TkF.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @menoumespiti: Κρατάμε αποστάσεις. Περιορίζουμε τη μετάδοση της νόσου.\n#menoumespiti #covid_19 #coronavirus #eody https://t.co/ezFK2UlEhS",
            "TweetId": "1242142456197648389",
            "CreatedAt": "Mon Mar 23 17:33:34 +0000 2020",
            "CreatedAtIso": "2020-03-23T17:33:34.000Z",
            "RetweetCount": 109,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1241678843255164928/pu/img/-LBDnYpGllkqWA6P.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Κρατάμε αποστάσεις. Περιορίζουμε τη μετάδοση της νόσου.\n#menoumespiti #covid_19 #coronavirus #eody https://t.co/ezFK2UlEhS",
                "TweetId": "1241678908359159809",
                "CreatedAt": "Sun Mar 22 10:51:35 +0000 2020",
                "CreatedAtIso": "2020-03-22T10:51:35.000Z",
                "RetweetCount": 109,
                "TweetedBy": "menoumespiti",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1241678843255164928/pu/img/-LBDnYpGllkqWA6P.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Μένουμε Σπίτι",
                    "Location": "Ελλάς",
                    "Id": 1239125368101113900,
                    "UserName": "menoumespiti",
                    "FollowersCount": 1459,
                    "Description": "Επίσημος Λογαριασμός Καμπάνιας Υπουργείου Υγείας για τον Κορονοϊό.",
                    "StatusesCount": 35,
                    "FriendsCount": 6,
                    "FavouritesCount": 4,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1239132161099399168/QorWgq58_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @YpYgGR: #COVID19 ➡️Οδηγίες Ψυχολογικής Υποστήριξης των Πολιτών. #μενουμε_σπιτι  https://t.co/UtznfMgVyP",
            "TweetId": "1242142318767079426",
            "CreatedAt": "Mon Mar 23 17:33:01 +0000 2020",
            "CreatedAtIso": "2020-03-23T17:33:01.000Z",
            "RetweetCount": 73,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#COVID19 ➡️Οδηγίες Ψυχολογικής Υποστήριξης των Πολιτών. #μενουμε_σπιτι  https://t.co/UtznfMgVyP",
                "TweetId": "1242019752899424259",
                "CreatedAt": "Mon Mar 23 09:25:59 +0000 2020",
                "CreatedAtIso": "2020-03-23T09:25:59.000Z",
                "RetweetCount": 73,
                "TweetedBy": "YpYgGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                    "Id": 1598930275,
                    "UserName": "YpYgGR",
                    "FollowersCount": 13516,
                    "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                    "StatusesCount": 2308,
                    "FriendsCount": 78,
                    "FavouritesCount": 640,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Thank you @hans_kluge for the close cooperation @WHO_Europe https://t.co/r7BN9d8Tn5",
            "TweetId": "1242142041838157830",
            "CreatedAt": "Mon Mar 23 17:31:55 +0000 2020",
            "CreatedAtIso": "2020-03-23T17:31:55.000Z",
            "RetweetCount": 33,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                },
                {
                    "Id": 984728556625453000,
                    "FullName": "Hans Kluge",
                    "UserName": "hans_kluge"
                },
                {
                    "Id": 125403342,
                    "FullName": "WHO/Europe",
                    "UserName": "WHO_Europe"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Thank you @hans_kluge for the close cooperation @WHO_Europe https://t.co/r7BN9d8Tn5",
                "TweetId": "1242128219207237639",
                "CreatedAt": "Mon Mar 23 16:36:59 +0000 2020",
                "CreatedAtIso": "2020-03-23T16:36:59.000Z",
                "RetweetCount": 33,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 984728556625453000,
                        "FullName": "Hans Kluge",
                        "UserName": "hans_kluge"
                    },
                    {
                        "Id": 125403342,
                        "FullName": "WHO/Europe",
                        "UserName": "WHO_Europe"
                    }
                ],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @amna_news: #LIVE #Χαρδαλιάς Η κυβέρνηση δεν έχει τίποτα να κρύψει και δεν διαπραγματευόμαστε με τίποτα το δικαίωμα των Ελλήνων πολιτών…",
            "TweetId": "1242133561689485312",
            "CreatedAt": "Mon Mar 23 16:58:13 +0000 2020",
            "CreatedAtIso": "2020-03-23T16:58:13.000Z",
            "RetweetCount": 5,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 250058740,
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "UserName": "amna_news"
                }
            ],
            "OriginalTweet": {
                "TweetText": "#LIVE #Χαρδαλιάς Η κυβέρνηση δεν έχει τίποτα να κρύψει και δεν διαπραγματευόμαστε με τίποτα το δικαίωμα των Ελλήνων πολιτών να ξέρουν την αλήθεια και μόνο την αλήθεια \n\n#κορονοϊός #coronavirus #COVID19 #Covid_2019 #μένουμε_σπίτι #καραντίνα #StayHome #απαγόρευση_κυκλοφορίας",
                "TweetId": "1242125570974105602",
                "CreatedAt": "Mon Mar 23 16:26:28 +0000 2020",
                "CreatedAtIso": "2020-03-23T16:26:28.000Z",
                "RetweetCount": 5,
                "TweetedBy": "amna_news",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "250058740",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "ΑΠΕ-ΜΠΕ (στο 🏠)",
                    "Location": "Athens, Greece",
                    "Id": 250058740,
                    "UserName": "amna_news",
                    "FollowersCount": 67385,
                    "Description": "Αθηναϊκό - Μακεδονικό Πρακτορείο Ειδήσεων: το εθνικό ειδησεογραφικό πρακτορείο της Ελλάδας |English: @amna_newseng |Sport: @praktoreiosport",
                    "StatusesCount": 313045,
                    "FriendsCount": 3572,
                    "FavouritesCount": 372,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/801451557824983041/3gMmgb0q_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "⚠️Κήρυξη περιοχών της @RegionofEpirus σε κατάσταση Έκτακτης Ανάγκης Πολιτικής Προστασίας🏚️\n\nΔείτε περισσότερα 🔗 https://t.co/dApIDpbzTt https://t.co/ZeyfN4TZeX",
            "TweetId": "1242132586878717955",
            "CreatedAt": "Mon Mar 23 16:54:21 +0000 2020",
            "CreatedAtIso": "2020-03-23T16:54:21.000Z",
            "RetweetCount": 18,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETzw2iNWkAo97d-.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 390570521,
                    "FullName": "Περιφέρεια Ηπείρου",
                    "UserName": "RegionofEpirus"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "Tο #ECDC συμμετέχει στην καμπάνια #SafeHands που εγκαινίασε ο ΓΔ #ΠΟΥ #WHO Dr Tedros Adhanom και καλεί την Ευρωπαϊκη Επιτροπή, το Συμβούλιο και το Ευρωκοινοβουλιο να ...πλύνουν σωστά τα χέρια &amp; να αναρτήσουν τα σχετικά βίντεο! https://t.co/ZmEs176DpK",
            "TweetId": "1242078096053895169",
            "CreatedAt": "Mon Mar 23 13:17:49 +0000 2020",
            "CreatedAtIso": "2020-03-23T13:17:49.000Z",
            "RetweetCount": 5,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Ενισχύουμε τα νοσοκομεία με προσλήψεις &amp; εξοπλισμό.\nΌμως, για να αντιμετωπίσουμε την πανδημία, χρειαζόμαστε κάθε βοήθεια: Ια…",
            "TweetId": "1242073950672338944",
            "CreatedAt": "Mon Mar 23 13:01:21 +0000 2020",
            "CreatedAtIso": "2020-03-23T13:01:21.000Z",
            "RetweetCount": 274,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ενισχύουμε τα νοσοκομεία με προσλήψεις &amp; εξοπλισμό.\nΌμως, για να αντιμετωπίσουμε την πανδημία, χρειαζόμαστε κάθε βοήθεια: Ιατρούς, νοσηλευτές, παραϊατρικό προσωπικό, ψυχολόγους, φοιτητές, συνταξιούχους επιστημών υγείας.\nΓίνε Εθελοντής⤵️\n#ethelontes_covid19\nhttps://t.co/eGDCcZIGvu",
                "TweetId": "1242044929855143938",
                "CreatedAt": "Mon Mar 23 11:06:02 +0000 2020",
                "CreatedAtIso": "2020-03-23T11:06:02.000Z",
                "RetweetCount": 274,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Από σήμερα ισχύει ο αυστηρός περιορισμός της κυκλοφορίας σε όλη την Ελλάδα. Ας γίνει το κάθε σπίτι ένα οχυρό ζωής και…",
            "TweetId": "1242073910109253646",
            "CreatedAt": "Mon Mar 23 13:01:11 +0000 2020",
            "CreatedAtIso": "2020-03-23T13:01:11.000Z",
            "RetweetCount": 599,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Από σήμερα ισχύει ο αυστηρός περιορισμός της κυκλοφορίας σε όλη την Ελλάδα. Ας γίνει το κάθε σπίτι ένα οχυρό ζωής και ας μείνει η πόρτα όλων μας κλειστή στον κορονοϊό. Μένουμε υγιείς, μένουμε ασφαλείς, μένουμε στο σπίτι. \n\nΓια πληροφορίες, επισκεφτείτε το https://t.co/4WigIMaEOV https://t.co/eGFAl0F0Gp",
                "TweetId": "1242041952041926657",
                "CreatedAt": "Mon Mar 23 10:54:12 +0000 2020",
                "CreatedAtIso": "2020-03-23T10:54:12.000Z",
                "RetweetCount": 599,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETyeKFYXYAEIxL6.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Ενισχύουμε τα νοσοκομεία με προσλήψεις &amp; εξοπλισμό.\nΌμως, για να αντιμετωπίσουμε την πανδημία, χρειαζόμαστε κάθε βοήθεια: Ια…",
            "TweetId": "1242045478939824133",
            "CreatedAt": "Mon Mar 23 11:08:12 +0000 2020",
            "CreatedAtIso": "2020-03-23T11:08:12.000Z",
            "RetweetCount": 274,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Ενισχύουμε τα νοσοκομεία με προσλήψεις &amp; εξοπλισμό.\nΌμως, για να αντιμετωπίσουμε την πανδημία, χρειαζόμαστε κάθε βοήθεια: Ιατρούς, νοσηλευτές, παραϊατρικό προσωπικό, ψυχολόγους, φοιτητές, συνταξιούχους επιστημών υγείας.\nΓίνε Εθελοντής⤵️\n#ethelontes_covid19\nhttps://t.co/eGDCcZIGvu",
                "TweetId": "1242044929855143938",
                "CreatedAt": "Mon Mar 23 11:06:02 +0000 2020",
                "CreatedAtIso": "2020-03-23T11:06:02.000Z",
                "RetweetCount": 274,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Δείτε τις περιοχές βροχοπτώσεων έως και την Παρασκευή πάνω σε χάρτη 500 hPa και επιφανείας, από την @EMY_HNMS , @EmyEmk . To σύστημα της Πέμπτης θα επηρεάσει τις περισσότερες περιοχές της χώρας . \nhttps://t.co/TlcLTZh6Ll https://t.co/EiMffjvRSG",
            "TweetId": "1242043585819807747",
            "CreatedAt": "Mon Mar 23 11:00:41 +0000 2020",
            "CreatedAtIso": "2020-03-23T11:00:41.000Z",
            "RetweetCount": 7,
            "TweetedBy": "EMY_HNMS",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1242042758384291841/pu/img/igtNgSGlEiBya7KS.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 827844841,
                    "FullName": "EMY",
                    "UserName": "EMY_HNMS"
                },
                {
                    "Id": 1066978850352111600,
                    "FullName": "EMY_EMK",
                    "UserName": "EmyEmk"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "EMY",
                "Location": "Ελλάδα, Greece",
                "Id": 827844841,
                "UserName": "EMY_HNMS",
                "FollowersCount": 4398,
                "Description": "Εθνική Μετεωρολογική Υπηρεσία, Πρόγνωση Καιρού Ελλάδας #Kairos #Weather",
                "StatusesCount": 105,
                "FriendsCount": 30,
                "FavouritesCount": 65,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/966200113126428674/H5xlrbmx_normal.jpg"
            }
        },
        {
            "TweetText": "RT @Vkikilias: Κορονοϊός: Reuters: «Η Ελλάδα αντέδρασε πιο γρήγορα από άλλες ευρωπαϊκές χώρες» | https://t.co/D5epGkEtbh https://t.co/wJPsK…",
            "TweetId": "1242034049436303360",
            "CreatedAt": "Mon Mar 23 10:22:47 +0000 2020",
            "CreatedAtIso": "2020-03-23T10:22:47.000Z",
            "RetweetCount": 85,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Κορονοϊός: Reuters: «Η Ελλάδα αντέδρασε πιο γρήγορα από άλλες ευρωπαϊκές χώρες» | https://t.co/D5epGkEtbh https://t.co/wJPsKrgSUp",
                "TweetId": "1242021239096516608",
                "CreatedAt": "Mon Mar 23 09:31:53 +0000 2020",
                "CreatedAtIso": "2020-03-23T09:31:53.000Z",
                "RetweetCount": 85,
                "TweetedBy": "Vkikilias",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Vassilis Kikilias",
                    "Location": "Αθήνα",
                    "Id": 54283324,
                    "UserName": "Vkikilias",
                    "FollowersCount": 45605,
                    "Description": "Υπουργός Υγείας | Βουλευτής Α' Αθηνών | Facebook Page: https://t.co/xWXWQrWJeW Instagram: https://t.co/nTrijlkkly",
                    "StatusesCount": 15758,
                    "FriendsCount": 1265,
                    "FavouritesCount": 7545,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148311635704127489/xCYzMBbX_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#COVID19 ➡️Οδηγίες Ψυχολογικής Υποστήριξης των Πολιτών. #μενουμε_σπιτι  https://t.co/UtznfMgVyP",
            "TweetId": "1242019752899424259",
            "CreatedAt": "Mon Mar 23 09:25:59 +0000 2020",
            "CreatedAtIso": "2020-03-23T09:25:59.000Z",
            "RetweetCount": 73,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @eody_gr: Εγκυμοσύνη και λοίμωξη από το νέο κορωνοϊό #COVID19  #coronavirus\nΕρωτήσεις – Απαντήσεις https://t.co/wTvgb4PtnW https://t.co/…",
            "TweetId": "1242014420982812675",
            "CreatedAt": "Mon Mar 23 09:04:48 +0000 2020",
            "CreatedAtIso": "2020-03-23T09:04:48.000Z",
            "RetweetCount": 13,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Εγκυμοσύνη και λοίμωξη από το νέο κορωνοϊό #COVID19  #coronavirus\nΕρωτήσεις – Απαντήσεις https://t.co/wTvgb4PtnW https://t.co/6K5MZSTMxi",
                "TweetId": "1241993975608872962",
                "CreatedAt": "Mon Mar 23 07:43:33 +0000 2020",
                "CreatedAtIso": "2020-03-23T07:43:33.000Z",
                "RetweetCount": 13,
                "TweetedBy": "eody_gr",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETxy736WoAAvQk-.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "Location": "Αγράφων 3-5, Μαρούσι",
                    "Id": 717964915,
                    "UserName": "eody_gr",
                    "FollowersCount": 6681,
                    "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                    "StatusesCount": 9519,
                    "FriendsCount": 383,
                    "FavouritesCount": 357,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @menoumespiti: Κρατάμε αποστάσεις. Περιορίζουμε τη μετάδοση της νόσου.\n#menoumespiti #covid_19 #coronavirus #eody https://t.co/ezFK2UlEhS",
            "TweetId": "1242007964598308865",
            "CreatedAt": "Mon Mar 23 08:39:08 +0000 2020",
            "CreatedAtIso": "2020-03-23T08:39:08.000Z",
            "RetweetCount": 109,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [
                "https://pbs.twimg.com/ext_tw_video_thumb/1241678843255164928/pu/img/-LBDnYpGllkqWA6P.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Κρατάμε αποστάσεις. Περιορίζουμε τη μετάδοση της νόσου.\n#menoumespiti #covid_19 #coronavirus #eody https://t.co/ezFK2UlEhS",
                "TweetId": "1241678908359159809",
                "CreatedAt": "Sun Mar 22 10:51:35 +0000 2020",
                "CreatedAtIso": "2020-03-22T10:51:35.000Z",
                "RetweetCount": 109,
                "TweetedBy": "menoumespiti",
                "MediaUrls": [
                    "https://pbs.twimg.com/ext_tw_video_thumb/1241678843255164928/pu/img/-LBDnYpGllkqWA6P.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Μένουμε Σπίτι",
                    "Location": "Ελλάς",
                    "Id": 1239125368101113900,
                    "UserName": "menoumespiti",
                    "FollowersCount": 1459,
                    "Description": "Επίσημος Λογαριασμός Καμπάνιας Υπουργείου Υγείας για τον Κορονοϊό.",
                    "StatusesCount": 35,
                    "FriendsCount": 6,
                    "FavouritesCount": 4,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1239132161099399168/QorWgq58_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "Εγκυμοσύνη και λοίμωξη από το νέο κορωνοϊό #COVID19  #coronavirus\nΕρωτήσεις – Απαντήσεις https://t.co/wTvgb4PtnW https://t.co/6K5MZSTMxi",
            "TweetId": "1241993975608872962",
            "CreatedAt": "Mon Mar 23 07:43:33 +0000 2020",
            "CreatedAtIso": "2020-03-23T07:43:33.000Z",
            "RetweetCount": 13,
            "TweetedBy": "eody_gr",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETxy736WoAAvQk-.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "🔴Κοινή Συνέντευξη Τύπου @nhardalias  @Pierrakakis  @th_livanios @kontozamanis &amp; Ελευθέριου Οικονόμου για τον περιορισμό κυκλοφορίας πολιτών σε όλη την επικράτεια λόγω #COVIDー19 \n\n@GSCP_GR @YpYgGR @ypesgr @MinDigitalGr \n@menoumespiti \n\nΠερισσότερα🔗https://t.co/CKDf49WThE https://t.co/awhI3zcfZ0",
            "TweetId": "1241851736341516289",
            "CreatedAt": "Sun Mar 22 22:18:21 +0000 2020",
            "CreatedAtIso": "2020-03-22T22:18:21.000Z",
            "RetweetCount": 12,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETvxS97WsAIULa8.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 37141924,
                    "FullName": "Kyriakos Pierrakakis",
                    "UserName": "Pierrakakis"
                },
                {
                    "Id": 1152162776250540000,
                    "FullName": "Thodoris Livanios",
                    "UserName": "th_livanios"
                },
                {
                    "Id": 52419377,
                    "FullName": "VassilisKontozamanis",
                    "UserName": "kontozamanis"
                },
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 940221239930622000,
                    "FullName": "Υπουργείο Εσωτερικών | Ministry of Interior",
                    "UserName": "ypesgr"
                },
                {
                    "Id": 923162646056263700,
                    "FullName": "Υπουργείο Ψηφιακής Διακυβέρνησης",
                    "UserName": "MinDigitalGr"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @GSCP_GR: 1⃣8⃣ χρήσιμες ερωτήσεις - απαντήσεις για την απαγόρευση🚫 της κυκλοφορίας πολιτών σε όλη την επικράτεια\n📌@nhardalias: \n✅@menoum…",
            "TweetId": "1241830396528136193",
            "CreatedAt": "Sun Mar 22 20:53:33 +0000 2020",
            "CreatedAtIso": "2020-03-22T20:53:33.000Z",
            "RetweetCount": 105,
            "TweetedBy": "eody_gr",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                },
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "1⃣8⃣ χρήσιμες ερωτήσεις - απαντήσεις για την απαγόρευση🚫 της κυκλοφορίας πολιτών σε όλη την επικράτεια\n📌@nhardalias: \n✅@menoumespiti\n✅Αποφεύγουμε τον συγχρωτισμό\n✅Ακολουθούμε τους κανόνες υγιεινής\n  \n@YpYgGR  @eody_gr  #COVIDー19 \n\nΠερισσότερα🔗https://t.co/rUIOSZ03ch https://t.co/nZPdk9s1Pd",
                "TweetId": "1241793185606766596",
                "CreatedAt": "Sun Mar 22 18:25:41 +0000 2020",
                "CreatedAtIso": "2020-03-22T18:25:41.000Z",
                "RetweetCount": 105,
                "TweetedBy": "GSCP_GR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETu5ZX5XQAA07Yq.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 86951686,
                        "FullName": "Νίκος Γ. Χαρδαλιάς",
                        "UserName": "nhardalias"
                    },
                    {
                        "Id": 1239125368101113900,
                        "FullName": "Μένουμε Σπίτι",
                        "UserName": "menoumespiti"
                    },
                    {
                        "Id": 1598930275,
                        "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                        "UserName": "YpYgGR"
                    },
                    {
                        "Id": 717964915,
                        "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                        "UserName": "eody_gr"
                    }
                ],
                "UserDetails": {
                    "FullName": "Civil Protection GR",
                    "Location": "Greece",
                    "Id": 1637650700,
                    "UserName": "GSCP_GR",
                    "FollowersCount": 27610,
                    "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                    "StatusesCount": 3020,
                    "FriendsCount": 205,
                    "FavouritesCount": 635,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                "Location": "Αγράφων 3-5, Μαρούσι",
                "Id": 717964915,
                "UserName": "eody_gr",
                "FollowersCount": 6681,
                "Description": "O σκοπός του ΕΟΔΥ είναι η παροχή υπηρεσιών που συμβάλλουν στην προστασία και βελτίωση της υγείας και την αύξηση του προσδόκιμου επιβίωσης του πληθυσμού.",
                "StatusesCount": 9519,
                "FriendsCount": 383,
                "FavouritesCount": 357,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1202101162121596929/hd1J74eG_normal.jpg"
            }
        },
        {
            "TweetText": "⚠️ Επείγουσα ειδοποίηση για περιορισμό \n🚫κυκλοφορίας από την @GSCP_GR μέσω  του @112Greece\n  \n@menoumespiti #COVIDー19  \n\nΔεν φοβόμαστε-Προστατευόμαστε\n🛡️Ασπίδα μας, η γνώση ❕ https://t.co/b1haWu7RSt",
            "TweetId": "1241802673235595265",
            "CreatedAt": "Sun Mar 22 19:03:23 +0000 2020",
            "CreatedAtIso": "2020-03-22T19:03:23.000Z",
            "RetweetCount": 77,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETvC8rdXkAMQMgb.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                },
                {
                    "Id": 1187287012442804200,
                    "FullName": "112 Greece",
                    "UserName": "112Greece"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @GSCP_GR: 1⃣8⃣ χρήσιμες ερωτήσεις - απαντήσεις για την απαγόρευση🚫 της κυκλοφορίας πολιτών σε όλη την επικράτεια\n📌@nhardalias: \n✅@menoum…",
            "TweetId": "1241796604576837632",
            "CreatedAt": "Sun Mar 22 18:39:16 +0000 2020",
            "CreatedAtIso": "2020-03-22T18:39:16.000Z",
            "RetweetCount": 105,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 1637650700,
                    "FullName": "Civil Protection GR",
                    "UserName": "GSCP_GR"
                },
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "1⃣8⃣ χρήσιμες ερωτήσεις - απαντήσεις για την απαγόρευση🚫 της κυκλοφορίας πολιτών σε όλη την επικράτεια\n📌@nhardalias: \n✅@menoumespiti\n✅Αποφεύγουμε τον συγχρωτισμό\n✅Ακολουθούμε τους κανόνες υγιεινής\n  \n@YpYgGR  @eody_gr  #COVIDー19 \n\nΠερισσότερα🔗https://t.co/rUIOSZ03ch https://t.co/nZPdk9s1Pd",
                "TweetId": "1241793185606766596",
                "CreatedAt": "Sun Mar 22 18:25:41 +0000 2020",
                "CreatedAtIso": "2020-03-22T18:25:41.000Z",
                "RetweetCount": 105,
                "TweetedBy": "GSCP_GR",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETu5ZX5XQAA07Yq.jpg"
                ],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 86951686,
                        "FullName": "Νίκος Γ. Χαρδαλιάς",
                        "UserName": "nhardalias"
                    },
                    {
                        "Id": 1239125368101113900,
                        "FullName": "Μένουμε Σπίτι",
                        "UserName": "menoumespiti"
                    },
                    {
                        "Id": 1598930275,
                        "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                        "UserName": "YpYgGR"
                    },
                    {
                        "Id": 717964915,
                        "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                        "UserName": "eody_gr"
                    }
                ],
                "UserDetails": {
                    "FullName": "Civil Protection GR",
                    "Location": "Greece",
                    "Id": 1637650700,
                    "UserName": "GSCP_GR",
                    "FollowersCount": 27610,
                    "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                    "StatusesCount": 3020,
                    "FriendsCount": 205,
                    "FavouritesCount": 635,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "1⃣8⃣ χρήσιμες ερωτήσεις - απαντήσεις για την απαγόρευση🚫 της κυκλοφορίας πολιτών σε όλη την επικράτεια\n📌@nhardalias: \n✅@menoumespiti\n✅Αποφεύγουμε τον συγχρωτισμό\n✅Ακολουθούμε τους κανόνες υγιεινής\n  \n@YpYgGR  @eody_gr  #COVIDー19 \n\nΠερισσότερα🔗https://t.co/rUIOSZ03ch https://t.co/nZPdk9s1Pd",
            "TweetId": "1241793185606766596",
            "CreatedAt": "Sun Mar 22 18:25:41 +0000 2020",
            "CreatedAtIso": "2020-03-22T18:25:41.000Z",
            "RetweetCount": 105,
            "TweetedBy": "GSCP_GR",
            "MediaUrls": [
                "https://pbs.twimg.com/media/ETu5ZX5XQAA07Yq.jpg"
            ],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 86951686,
                    "FullName": "Νίκος Γ. Χαρδαλιάς",
                    "UserName": "nhardalias"
                },
                {
                    "Id": 1239125368101113900,
                    "FullName": "Μένουμε Σπίτι",
                    "UserName": "menoumespiti"
                },
                {
                    "Id": 1598930275,
                    "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                    "UserName": "YpYgGR"
                },
                {
                    "Id": 717964915,
                    "FullName": "Εθνικός Οργανισμός Δημόσιας Υγείας (ΕΟΔΥ)",
                    "UserName": "eody_gr"
                }
            ],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "Civil Protection GR",
                "Location": "Greece",
                "Id": 1637650700,
                "UserName": "GSCP_GR",
                "FollowersCount": 27610,
                "Description": "Επίσημος λογαριασμός της Γενικής Γραμματείας Πολιτικής Προστασίας στο Twitter. Ο λογαριασμός δεν παρακολουθείται 24/7. Σε έκτακτη ανάγκη καλέστε το 112",
                "StatusesCount": 3020,
                "FriendsCount": 205,
                "FavouritesCount": 635,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/473448911684653056/4eP8jWTM_normal.png"
            }
        },
        {
            "TweetText": "RT @HellenicLeaders: @PrimeministerGR and Health Minister @Vkikilias have acted quickly and responsibly.  \n\nALL of society must realize we…",
            "TweetId": "1241790865032560642",
            "CreatedAt": "Sun Mar 22 18:16:28 +0000 2020",
            "CreatedAtIso": "2020-03-22T18:16:28.000Z",
            "RetweetCount": 34,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "en",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 385521929,
                    "FullName": "HellenicLeaders",
                    "UserName": "HellenicLeaders"
                },
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                },
                {
                    "Id": 54283324,
                    "FullName": "Vassilis Kikilias",
                    "UserName": "Vkikilias"
                }
            ],
            "OriginalTweet": {
                "TweetText": "@PrimeministerGR and Health Minister @Vkikilias have acted quickly and responsibly.  \n\nALL of society must realize we are #InItTogether. We are at war with an invisible, but not an invincible enemy. We will win if everyone does their part. #StayHome #μενουμε_σπιτι https://t.co/EDxrDZqnno",
                "TweetId": "1241785594222710785",
                "CreatedAt": "Sun Mar 22 17:55:31 +0000 2020",
                "CreatedAtIso": "2020-03-22T17:55:31.000Z",
                "RetweetCount": 34,
                "TweetedBy": "HellenicLeaders",
                "MediaUrls": [
                    "https://pbs.twimg.com/media/ETu1ag9XkAMwtpr.jpg"
                ],
                "TweetLanguageCode": "en",
                "TweetInReplyToUserId": "104298598",
                "Favorited": false,
                "UserMentions": [
                    {
                        "Id": 104298598,
                        "FullName": "Prime Minister GR",
                        "UserName": "PrimeministerGR"
                    },
                    {
                        "Id": 54283324,
                        "FullName": "Vassilis Kikilias",
                        "UserName": "Vkikilias"
                    }
                ],
                "UserDetails": {
                    "FullName": "HellenicLeaders",
                    "Location": "",
                    "Id": 385521929,
                    "UserName": "HellenicLeaders",
                    "FollowersCount": 6911,
                    "Description": "",
                    "StatusesCount": 14486,
                    "FriendsCount": 278,
                    "FavouritesCount": 3971,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1644153007/halc_logomark_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Το Κράτος οφείλει κατά το Σύνταγμα να «μεριμνά για την Υγεία των Πολιτών» και να παρεμβαίνει όταν η άσκηση της ατομική…",
            "TweetId": "1241790856245501954",
            "CreatedAt": "Sun Mar 22 18:16:26 +0000 2020",
            "CreatedAtIso": "2020-03-22T18:16:26.000Z",
            "RetweetCount": 357,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Το Κράτος οφείλει κατά το Σύνταγμα να «μεριμνά για την Υγεία των Πολιτών» και να παρεμβαίνει όταν η άσκηση της ατομικής ελευθερίας απειλεί την κοινωνία. Στο όνομα του συλλογικού καλού, λοιπόν, προχωρώ στη σημερινή απόφαση: για να προστατέψω την Υγεία μας και όσα πετύχαμε ως τώρα.",
                "TweetId": "1241764771772477441",
                "CreatedAt": "Sun Mar 22 16:32:47 +0000 2020",
                "CreatedAtIso": "2020-03-22T16:32:47.000Z",
                "RetweetCount": 357,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @govgr: Live | Aνακοινώσεις για τον αυστηρό περιορισμό της κυκλοφορίας και την απαγόρευση κάθε άσκοπης μετακίνησης πολιτών σε όλη την επ…",
            "TweetId": "1241790814675705857",
            "CreatedAt": "Sun Mar 22 18:16:16 +0000 2020",
            "CreatedAtIso": "2020-03-22T18:16:16.000Z",
            "RetweetCount": 68,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 207483074,
                    "FullName": "Ελληνική Κυβέρνηση",
                    "UserName": "govgr"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Live | Aνακοινώσεις για τον αυστηρό περιορισμό της κυκλοφορίας και την απαγόρευση κάθε άσκοπης μετακίνησης πολιτών σε όλη την επικράτεια, στο Κέντρο Επιχειρήσεων Πολιτικής Προστασίας. https://t.co/Eo45pAJnRC",
                "TweetId": "1241772084583444480",
                "CreatedAt": "Sun Mar 22 17:01:50 +0000 2020",
                "CreatedAtIso": "2020-03-22T17:01:50.000Z",
                "RetweetCount": 68,
                "TweetedBy": "govgr",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Ελληνική Κυβέρνηση",
                    "Location": "Greece",
                    "Id": 207483074,
                    "UserName": "govgr",
                    "FollowersCount": 44091,
                    "Description": "Επίσημος λογαριασμός ενημέρωσης για το έργο & τη δραστηριότητα της Κυβέρνησης της Ελληνικής Δημοκρατίας.",
                    "StatusesCount": 4409,
                    "FriendsCount": 498,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/912632010895708161/3H1btHin_normal.jpg"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "RT @PrimeministerGR: Live | Έδωσα εντολή να προχωρήσουν οι απαραίτητες ενέργειες ώστε από Δευτέρα 23/3 να ισχύσει η απαγόρευση κάθε άσκοπης…",
            "TweetId": "1241759414996041736",
            "CreatedAt": "Sun Mar 22 16:11:29 +0000 2020",
            "CreatedAtIso": "2020-03-22T16:11:29.000Z",
            "RetweetCount": 793,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [
                {
                    "Id": 104298598,
                    "FullName": "Prime Minister GR",
                    "UserName": "PrimeministerGR"
                }
            ],
            "OriginalTweet": {
                "TweetText": "Live | Έδωσα εντολή να προχωρήσουν οι απαραίτητες ενέργειες ώστε από Δευτέρα 23/3 να ισχύσει η απαγόρευση κάθε άσκοπης μετακίνησης πολιτών σε όλη την επικράτεια. Είναι, ίσως, το τελευταίο βήμα μιας Δημοκρατικής Πολιτείας που όμως πρέπει να γίνει εγκαίρως. https://t.co/TZspDTTMEF",
                "TweetId": "1241756624370499584",
                "CreatedAt": "Sun Mar 22 16:00:24 +0000 2020",
                "CreatedAtIso": "2020-03-22T16:00:24.000Z",
                "RetweetCount": 793,
                "TweetedBy": "PrimeministerGR",
                "MediaUrls": [],
                "TweetLanguageCode": "el",
                "TweetInReplyToUserId": "",
                "Favorited": false,
                "UserMentions": [],
                "UserDetails": {
                    "FullName": "Prime Minister GR",
                    "Location": "Greece",
                    "Id": 104298598,
                    "UserName": "PrimeministerGR",
                    "FollowersCount": 544009,
                    "Description": "Σελίδα του Πρωθυπουργού της Ελληνικής Δημοκρατίας | The Prime Minister of the Hellenic Republic",
                    "StatusesCount": 6672,
                    "FriendsCount": 209,
                    "FavouritesCount": 0,
                    "ProfileImageUrl": "https://pbs.twimg.com/profile_images/1148199282085961729/6UFKi90m_normal.png"
                }
            },
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        },
        {
            "TweetText": "#Briefing_COVID19 \n\nΑνακοινώνονται 94 νέα επιβεβαιωμένα κρούσματα κορονοϊού SARS-CoV-2 στη χώρα μας. Ο συνολικός αριθμός των επιβεβαιωμένων κρουσμάτων ανέρχεται σε 624.\n19 συμπολίτες μας έχουν πάρει εξιτήριο από το νοσοκομείο.",
            "TweetId": "1241755289130598400",
            "CreatedAt": "Sun Mar 22 15:55:06 +0000 2020",
            "CreatedAtIso": "2020-03-22T15:55:06.000Z",
            "RetweetCount": 84,
            "TweetedBy": "YpYgGR",
            "MediaUrls": [],
            "TweetLanguageCode": "el",
            "TweetInReplyToUserId": "",
            "Favorited": false,
            "UserMentions": [],
            "OriginalTweet": null,
            "UserDetails": {
                "FullName": "ΥΠΟΥΡΓΕΙΟ ΥΓΕΙΑΣ",
                "Location": "ΑΡΙΣΤΟΤΕΛΟΥΣ 17 - ΑΘΗΝΑ",
                "Id": 1598930275,
                "UserName": "YpYgGR",
                "FollowersCount": 13516,
                "Description": "Επίσημος λογαριασμός του Υπουργείου Υγείας",
                "StatusesCount": 2308,
                "FriendsCount": 78,
                "FavouritesCount": 640,
                "ProfileImageUrl": "https://pbs.twimg.com/profile_images/378800000511383269/08eceb24ae2f89629e7f196f15422877_normal.png"
            }
        }
    ]
};
}
