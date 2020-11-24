# Welcome to My Closet Keeper
>keep your closet in your pocket

###### The Inspiration

I personally am guilty of having way too many clothes in my closet. It's hard to remember what pieces I already own when out shopping or what pieces I can put together as an outfit for a special event comming up. I needed a convient way to keep all of this information, and more, right on my phone! 

###### Features 

A user can save individual pieces from their closet to pre-made categories to help with organization
They can then put pieces together to create outfits to be worn for special events/ everyday wear.
A Suitcases feature for when planning for a trip (specically what to pack) where a user can 

###### Setup 

1. Clone this repository
2. cd into the directory
3. Install the necessary packages:
```
npm install
npm i --save react react-dom react-router-dom reactstrap
npm i --save bootstrap
mkdir api and touch database.json to create the database
```
4. Copy and paste sample api below into the database
5. Run ```json-server -w database.json -p 8088 ``` from the api directory
6. In a separate terminal, run ```npm start``` from the repository directory
7. This app was designed for phone screens so in your browser window press cmd + opt + j (Macs) or ctrl + shift + j (Windows) to open Dev Tools and click Toggle Device Toolbar (pictured below) to change browswer view


###### Sample API 
You can copy + past the following sample data to have a better idea of the application OR you can start from scratch and try it out for yourself. 

<details>
<summary>Click for Empty Data</summary>
<br>

            {
            "users": [],
            "closetItems": [],
            "outfits": [],
            "clothingItemsOutfits": [],
            "categories": [
              {
                "id": 1,
                "name": "top"
              },
              {
                "id": 2,
                "name": "bottom"
              },
              {
                "id": 3,
                "name": "one-piece"
              },
              {
                "id": 4,
                "name": "jacket"
              },
              {
                "id": 5,
                "name": "shoe"
              },
              {
                "id": 6,
                "name": "accessory"
              }
            ],
            "suitcases": [],
            "outfitsSuitcases": [],
            "clothingItemsSuitcases": []
          }

</details>


<details>
<summary>Click for Sample Data</summary>
<br>
            
            {
              "users": [
                {
                  "email": "sam@sam.com",
                  "password": "123",
                  "name": "Sam",
                  "id": 1
                },
                {
                  "email": "test@test.com",
                  "password": "test",
                  "name": "Pam Market",
                  "id": 2
                }
              ],
              "closetItems": [
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600445584/myClosetKeeper/jpvjwaswm1is3nkenkdt.jpg",
                  "type": "Denim Jacket",
                  "color": "Blue",
                  "size": "Large",
                  "material": "Denim",
                  "placeOfPurchase": "Old Navy",
                  "categoryId": 4,
                  "userId": 1,
                  "id": 8
                },
                {
                  "id": 10,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600445649/myClosetKeeper/wtobgl6crpyxmkfzvbrd.jpg",
                  "type": "Polka Dot Skirt",
                  "color": "Black/White",
                  "size": "Large",
                  "material": "Silk",
                  "placeOfPurchase": "Ross",
                  "categoryId": 2,
                  "userId": 1
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600445760/myClosetKeeper/u7cdoimxp7oymtvjgqj2.jpg",
                  "type": "Sandals",
                  "color": "Brown",
                  "size": "Large",
                  "placeOfPurchase": "Target",
                  "categoryId": 5,
                  "userId": 1,
                  "id": 13
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600445915/myClosetKeeper/apsvdsjgok9tvvvm1kg9.jpg",
                  "type": "Beach Hat",
                  "color": "Tan",
                  "categoryId": 6,
                  "userId": 1,
                  "id": 19
                },
                {
                  "id": 20,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600449772/myClosetKeeper/knqxx65paotqjvfjmrfg.jpg",
                  "type": "Open Pocket Purse",
                  "color": "Black",
                  "categoryId": 6,
                  "userId": 1
                },
                {
                  "id": 21,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600449787/myClosetKeeper/gl47b5gqdkjlxwzelmzf.jpg",
                  "type": "Crossbody Purse",
                  "color": "Tan",
                  "categoryId": 6,
                  "userId": 1
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600445980/myClosetKeeper/psfqibrev5mrrgogbuwm.jpg",
                  "type": "Boots",
                  "color": "Tan",
                  "size": "8",
                  "placeOfPurchase": "Shoe Carnival",
                  "categoryId": 5,
                  "userId": 1,
                  "id": 22
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600788285/myClosetKeeper/cargiz1yhymvjqomhmar.jpg",
                  "type": "Swimsuit",
                  "color": "Black",
                  "size": "Large",
                  "placeOfPurchase": "TJ-Maxx",
                  "categoryId": 3,
                  "userId": 1,
                  "id": 24
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600991176/myClosetKeeper/sgzxkxxal1ssr6mdyexd.jpg",
                  "type": "Dotted Sweater",
                  "color": "Yellow",
                  "size": "Large",
                  "material": "Cotton",
                  "placeOfPurchase": "Old Navy",
                  "categoryId": 1,
                  "userId": 1,
                  "id": 26
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992064/myClosetKeeper/x6muvcj28wdbtgpjchea.jpg",
                  "type": "Perplum Work Blouse",
                  "color": "Black",
                  "size": "Large",
                  "material": "Chiffon",
                  "placeOfPurchase": "Kohls",
                  "categoryId": 1,
                  "userId": 1,
                  "id": 27
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992156/myClosetKeeper/qsc73ggpvuvh2f4kwhwe.jpg",
                  "type": "Crop Jeans",
                  "color": "Blue",
                  "size": "12",
                  "material": "Denim",
                  "placeOfPurchase": "Target",
                  "categoryId": 2,
                  "userId": 1,
                  "id": 28
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992225/myClosetKeeper/axx1lil0rasv1h7tnf9d.jpg",
                  "type": "Tie Dress",
                  "color": "Purple",
                  "size": "Large",
                  "material": "Cotton",
                  "placeOfPurchase": "Old Navy",
                  "categoryId": 3,
                  "userId": 1,
                  "id": 29
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992696/myClosetKeeper/shfsthgep66io8sc7rwx.jpg",
                  "type": "Dressy Flats",
                  "color": "Black",
                  "size": "8",
                  "material": "Seude",
                  "placeOfPurchase": "Forever 21",
                  "categoryId": 5,
                  "userId": 1,
                  "id": 31
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992791/myClosetKeeper/n5pb8qocoh3my5fa2hra.jpg",
                  "type": "Long Sweater",
                  "color": "Grey",
                  "size": "Large",
                  "material": "Wool",
                  "placeOfPurchase": "Old Navy ",
                  "categoryId": 4,
                  "userId": 1,
                  "id": 32
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600994027/myClosetKeeper/eyvuanpb9dcpigmk8l38.jpg",
                  "type": "Beatles Band T-shirt",
                  "color": "Grey",
                  "size": "Large",
                  "material": "Cotton",
                  "placeOfPurchase": "Thrift Shop",
                  "categoryId": 1,
                  "userId": 1,
                  "id": 34
                },
                {
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1602004129/myClosetKeeper/eiyokr9yfpq3pqgxkl40.jpg",
                  "type": "Jumper",
                  "color": "Green",
                  "size": "Large",
                  "material": "Cotten",
                  "placeOfPurchase": "Amazon",
                  "categoryId": 3,
                  "userId": 1,
                  "id": 35
                }
              ],
              "outfits": [
                {
                  "id": 1,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992445/myClosetKeeper/htol7lj7vq1iutckxytt.jpg",
                  "event": "Fall Everyday Outfit",
                  "userId": 1
                },
                {
                  "id": 5,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1600992996/myClosetKeeper/giibr7s2bkwinke2pmsx.jpg",
                  "event": "Work ",
                  "userId": 1
                },
                {
                  "id": 8,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1601042159/myClosetKeeper/epqbemraizfhq9mixfna.jpg",
                  "event": "Beach Day",
                  "userId": 1
                },
                {
                  "id": 9,
                  "image": "https://res.cloudinary.com/dkzwttxez/image/upload/v1602004160/myClosetKeeper/uymn0bm4kjrkalgvb32p.jpg",
                  "event": "Casual Everyday Outfit",
                  "userId": 1
                }
              ],
              "clothingItemsOutfits": [
                {
                  "closetItemId": 26,
                  "outfitId": 1,
                  "id": 1
                },
                {
                  "closetItemId": 28,
                  "outfitId": 1,
                  "id": 2
                },
                {
                  "closetItemId": 21,
                  "outfitId": 1,
                  "id": 3
                },
                {
                  "closetItemId": 22,
                  "outfitId": 1,
                  "id": 4
                },
                {
                  "closetItemId": 10,
                  "outfitId": 5,
                  "id": 14
                },
                {
                  "closetItemId": 31,
                  "outfitId": 5,
                  "id": 15
                },
                {
                  "closetItemId": 27,
                  "outfitId": 5,
                  "id": 16
                },
                {
                  "closetItemId": 20,
                  "outfitId": 5,
                  "id": 17
                },
                {
                  "closetItemId": 24,
                  "outfitId": 8,
                  "id": 22
                },
                {
                  "closetItemId": 19,
                  "outfitId": 8,
                  "id": 23
                },
                {
                  "closetItemId": 13,
                  "outfitId": 9,
                  "id": 24
                },
                {
                  "closetItemId": 35,
                  "outfitId": 9,
                  "id": 25
                }
              ],
              "categories": [
                {
                  "id": 1,
                  "name": "top"
                },
                {
                  "id": 2,
                  "name": "bottom"
                },
                {
                  "id": 3,
                  "name": "one-piece"
                },
                {
                  "id": 4,
                  "name": "jacket"
                },
                {
                  "id": 5,
                  "name": "shoe"
                },
                {
                  "id": 6,
                  "name": "accessory"
                }
              ],
              "suitcases": [
                {
                  "id": 1,
                  "startDate": "2020-10-13",
                  "endDate": "2020-10-15",
                  "tripName": "New Orleans",
                  "details": "I have to go on a 3 day, 2 night work trip.",
                  "userId": 1
                },
                {
                  "id": 2,
                  "startDate": "2020-10-08",
                  "endDate": "2020-10-11",
                  "tripName": "Savannah Georgia",
                  "details": "Try to go to the beach but may be cold",
                  "userId": 1
                }
              ],
              "outfitsSuitcases": [
                {
                  "outfitId": 5,
                  "suitcaseId": 1,
                  "id": 1
                },
                {
                  "outfitId": 9,
                  "suitcaseId": 2,
                  "id": 2
                },
                {
                  "outfitId": 8,
                  "suitcaseId": 2,
                  "id": 3
                }
              ],
              "clothingItemsSuitcases": [
                {
                  "closetItemId": 34,
                  "suitcaseId": 1,
                  "id": 1
                },
                {
                  "closetItemId": 28,
                  "suitcaseId": 1,
                  "id": 2
                },
                {
                  "closetItemId": 32,
                  "suitcaseId": 2,
                  "id": 3
                },
                {
                  "closetItemId": 21,
                  "suitcaseId": 2,
                  "id": 4
                }
              ]
            }
</details>
