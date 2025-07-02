import React from 'react'
import { Link } from 'react-router-dom';
import "./AllProductsPage.css"
const allProducts = [
    {
        id: 1,
        name: "Dilara",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9069-min.jpg?alt=media&token=d772c050-f0df-46cf-b987-cb985b4287d7",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9071-min.jpg?alt=media&token=f7615fac-6e52-482e-aa43-f89ea9c46da0",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9076-min.jpg?alt=media&token=a949047c-0460-4913-b124-2426edba6241",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9078-min.jpg?alt=media&token=5a1bfc11-2bfe-4ebf-ac11-8b65f87c1430",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9083-min.jpg?alt=media&token=d822f130-2636-421e-b4cf-8b68a837bb3b",
        ],
        price: 300000,
        description: "Raw silk hand-embroidered shawl is a luxurious and timeless accessory that showcases exquisite craftsmanship. Perfect for weddings, festive occasions, or as a statement piece, it combines the softness of pure silkwith intricate hand embroidery, making it an heirloom-worthy",
        fabric: "Raw silk",
        type: "Shawls",
        disclaimer : "Colors may vary due to lightining effects",
        link: "/product/Shawls/1",
      },
      {
        id: 2,
        name: "Maren",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9085-min.jpg?alt=media&token=c574b9d0-4dfd-4182-aebd-359d76c5bf8d",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9090-min.jpg?alt=media&token=a3ac7f16-bfc9-40c8-8f21-7ba26d7bf716",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9091-min.jpg?alt=media&token=97d132e8-b84b-48e8-959a-f6dc67af7f9b",
      
        ],
        price: 300000,
        description: "A raw silk pearl white hand-embellished shawl is a stunning and versatile piece that embodies grace and sophistication. The texture of raw silk combined with delicate embellishments creates a luxurious accessory perfect for bridal wear, formal events, or festive gatherings.",
        fabric: "Raw silk",
        type: "Shawls",
        disclaimer : "Colors may vary due to lightining effects",
        link: "/product/Shawls/2",
      },
      {
        id: 3,
        name: "Amira",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9091-min.jpg?alt=media&token=97d132e8-b84b-48e8-959a-f6dc67af7f9b",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9095-min.jpg?alt=media&token=8faa0759-eafd-4949-8b31-963e54c58764",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9097-min.jpg?alt=media&token=cf18aec8-6b46-4eec-8b28-c4eba97f19cb",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9098-min.jpg?alt=media&token=be06fee4-dbee-42cc-8771-381f3a4c2cae",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9099-min.jpg?alt=media&token=d8f05b6c-4971-4de0-9a22-cc0a2e371b2c",
      
        ],
        price: 300000,
        description: "A dark blue multi-embroidery hand-work shawl is an exquisite statement piece, perfect for evening events, weddings, or festive occasions. The deep blue base provides a striking contrast to colorful,intricate hand embroidery, showcasing a blend of tradition and modernity",
        fabric: "SILK KARANDI",
        type: "Shawls",
        disclaimer : "Colors may vary due to lightining effects",
        link: "/product/Shawls/3",
      },
      {
        id: 4,
        name: "Maisy",
        images: [
  
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9104-min.jpg?alt=media&token=2494eb10-fcfb-4aa4-91ca-4d914093c20c",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9103-min.jpg?alt=media&token=8355deeb-9a49-45ce-b918-961a99307366",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9105-min.jpg?alt=media&token=9ec8fca8-f8ae-49f1-9972-239c63277e74",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9107-min.jpg?alt=media&token=eabaff85-6e39-4eab-83d3-8553d7f7515d",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FShawls%20Compressed%2FIMG_9108-min.jpg?alt=media&token=c1732914-536c-4ceb-ac51-3f2a5b7340a1",
      ],
        price: 400000,
        description: "A heavy hand-embellished embroidered shawl is a luxurious accessory that radiates timeless elegance and grandeur. Perfect for bridal wear,festive celebrations, or formal events, such a shawl becomes the highlight of any ensemble. Here’s a detailed concept for a statement piece:.",
        fabric: "Raw silk",
        type: "Shawls",
        disclaimer : "Colors may vary due to lightining effects",
        link: "/product/Shawls/4",
      },
      {
        id: 5,
        name: "Aveline",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8527-min.jpg?alt=media&token=2abf99cd-b353-4bd1-8757-15439fb10338",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8530-min.jpg?alt=media&token=f7178bda-5a1a-4cd4-ab27-7628b67fe7bb",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8532-min.jpg?alt=media&token=6037e383-951f-4228-9cf2-da71745df9c7",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8533-min.jpg?alt=media&token=63a9ce39-45bf-4f77-b897-39e49de4a98d",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8535-min.jpg?alt=media&token=3aca27ba-a6e6-4d91-82aa-4ef27554167e",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8537-min.jpg?alt=media&token=151365a6-a26f-4dba-8eff-3bea671a798e",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8540-min.jpg?alt=media&token=9c9ab316-34db-4bc0-98c6-5458f6749b69",
      ],
        saleprice: 18000,
        price: 14400,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        disclaimer : "Colors may vary due to lightining effects",
        link : "/product/WinterCollection/1",
      },
      {
        id: 6,
        name: "Embreled",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8549-min.jpg?alt=media&token=e0864b7a-b3ec-4973-83cb-5ab2b2437401",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8553-min.jpg?alt=media&token=edb94603-6e9d-49c7-ad3d-df396b12c054",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8558-min.jpg?alt=media&token=bc745a79-dfe8-4bed-b00f-4ce9d0ccd2e6",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8562-min.jpg?alt=media&token=2201fd9a-5928-4445-9d54-7376cc442da5",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8565-min.jpg?alt=media&token=ca53a720-8d38-4cf0-9898-9b2dda36341c",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8567-min.jpg?alt=media&token=e8ab991b-b2a6-4b40-9db3-f36a01a779d4",
      ],
      saleprice: 16000,
        price: 12800,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC ",
        link : "/product/WinterCollection/2",
      },
      {
        id: 7,
        name: "Coral Daisy",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8621-min.jpg?alt=media&token=d0793066-d698-4ec1-ad97-8823f7b3a79d",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8622-min.jpg?alt=media&token=63385db2-d556-4d84-ae99-040add402642",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8625-min.jpg?alt=media&token=1aece8bd-5080-4ae8-87e7-2491ff76a299",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8631-min.jpg?alt=media&token=4e6058fb-c125-4bf1-9747-8c4bf5085c34",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8636-min.jpg?alt=media&token=7a02fc68-3683-48b1-8b09-e1259a018fa9",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8638-min.jpg?alt=media&token=cc503b26-9515-4257-8e24-910fb0601ca7",
      ],
      saleprice: 16000,
        price: 12800,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/3",
      },
      {
        id: 8,
        name: "Darcy",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8644-min.jpg?alt=media&token=f6a53312-ff42-4fcf-8bcd-560e85e192b7",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8663-min.jpg?alt=media&token=70825a26-3f81-405d-8616-85c96d7b8534",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8669-min.jpg?alt=media&token=9dc80bc7-7d78-48d6-ac9d-85b5800db4ea",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8670-min.jpg?alt=media&token=ee46a31c-c76e-4829-88bb-2679a6ddf782",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8673-min.jpg?alt=media&token=03e31519-95f3-46a5-b5be-3f8f0660afa1",
      ],
        saleprice :18000,
        price: 14400,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/4",
      },
      {
        id: 9,
        name: "Eirene",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8676-min.jpg?alt=media&token=7afefa01-7727-4188-9639-cbf1768896ed",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8681-min.jpg?alt=media&token=c24682d6-5fea-4eae-b0dc-423c271af9a5",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8689-min.jpg?alt=media&token=9eb8aa9a-f438-47e0-939c-562d7d491d35",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8693-min.jpg?alt=media&token=da8815a3-2d55-4582-9801-b3c4f32eb8f2",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8697-min.jpg?alt=media&token=311e06ea-867b-4015-8645-e68538cb08d5",
      ],
        price: 12800,
        saleprice: 16000,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/5",
      },
      {
        id: 10,
        name: "Kelly green",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8701-min.jpg?alt=media&token=ef281401-ce59-4229-88c5-5d2658c303f4",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8707-min.jpg?alt=media&token=03fab08b-c314-4710-9f4e-11652bd1b284",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8712-min.jpg?alt=media&token=b8667f7f-7864-422c-900d-e38153ee453f",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8716-min.jpg?alt=media&token=1fcc5871-9177-4dd0-9fdd-13ce17e13d0b",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8721-min.jpg?alt=media&token=fc1c5a2c-d4e5-4444-80ee-b9daccf66bea",
      ],
        price: 12800,
        saleprice: 16000,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/6",
      },
      {
        id: 11,
        name: "Sepia",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8729-min.jpg?alt=media&token=18114799-bea6-4fb0-a852-25f8dfc80ab0",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8733-min.jpg?alt=media&token=2788e9d7-06bb-45db-b3b4-bf0dab183dcb",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8742-min.jpg?alt=media&token=93ef9c5a-92ba-4f75-a464-43dc6341d776",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8744-min.jpg?alt=media&token=f9f6e57b-3fee-4a2e-ae12-9a48bf60c17d",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8747-min.jpg?alt=media&token=0da62259-acb5-4440-ada5-514f3bfa78e6",
      ],
        price: 12800,
        saleprice: 16000,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/7",
      },
      {
        id: 12,
        name: "Quartz",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8751-min.jpg?alt=media&token=aee0b774-be2e-40ab-94d4-95ec6f6d0fcb",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8756-min.jpg?alt=media&token=7abccbd0-5f9c-4be1-ba7f-93444dffd4ca",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8761-min.jpg?alt=media&token=ba011567-c4b2-4380-8917-a961153f15a7",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8766-min.jpg?alt=media&token=69e56373-4399-4322-a3f2-ba98299bf726",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8772-min.jpg?alt=media&token=c998a3b0-d6fd-44c7-ab47-8adcd2eb807c",
      ],
        price: 13600,
        saleprice: 17000,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/8",
      },
      {
        id: 13,
        name: "Nyx",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8817-min.jpg?alt=media&token=38fa459f-2337-4574-957d-ef4b967c700f",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8820-min.jpg?alt=media&token=2ead32ae-b1ae-48ca-b49e-6e4c84d929f9",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8826-min.jpg?alt=media&token=4fd92cc1-4aeb-425b-af96-20e478b6d572",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8837-min.jpg?alt=media&token=d2b5cb5b-2cc3-4bec-b0fb-7869390702e8",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8845-min.jpg?alt=media&token=92c9b329-4d83-4945-892d-fc29caf9811f",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FCasuals%20Compressed%2FIMG_8846-min.jpg?alt=media&token=322273b8-4024-4b18-9384-0c2520f9f865",
      ],
        price: 12800,
        saleprice: 16000,
        description: "Brighten up your season with this classic straight fit shirt and trouser ,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/9",
      },
       {
        id: 14,
        name: "Eternity",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2Fformals%20last%2F1313e44c-1780-4f09-809c-3f1544a9afa8.jpeg?alt=media&token=8a6b850f-6188-417e-acab-dd8d137bfe2c",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2Fformals%20last%2F5f12019b-8bd6-4534-af46-403f31069da3.jpeg?alt=media&token=4c384f48-73bf-42bc-9d66-24ccb641a2e8",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2Fformals%20last%2F862e027f-57a2-48fc-af3a-7acc86e24c39.jpeg?alt=media&token=13d059aa-038e-4bd8-a238-9398696b4d99",
        ],
        saleprice: 17000,
        price: 17000,
        description: "Brighten up your season with this classic straight fit shirt and trouser,intricately embellished with embroidery details .",
        fabric: "SILK KARANDI",
        sizes: ["S", "M", "L", "XL"],
        type: "2PC",
        link : "/product/WinterCollection/10",
      },
      {
        id: 15,
        name: "Faye",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8856-min.jpg?alt=media&token=90d62c74-d35e-4fdd-84e1-5bad0c5338bf",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8861-min.jpg?alt=media&token=a4e0a455-a4e4-48dc-bc1c-5913adaecfa2",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8872-min.jpg?alt=media&token=6b9059ed-889c-47c1-a973-fb191a0338dc",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8878-min.jpg?alt=media&token=66f4a516-a666-4891-911b-f84f29637147",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8881-min.jpg?alt=media&token=984a8eff-5cc6-4216-978a-03f94c3f06e5",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8883-min.jpg?alt=media&token=59ae7c43-ee1b-4007-aaea-a1653cb54b68",
      ],
        price: 55000,
        description: "Discover the glory of our white sheesha silk outfit, featuring stunning hand work embellished details that brings elegant touch to your wardrobe",
        fabric: "Wool",
        sizes: ["S", "M", "L", "XL"],
        type: "Sweater",
        shirt :"Sheesh Silk",
        trouser : "Raw Silk",
        Dupatta : "chiffon dupatta",
        options: ["Pure Raw Silk", "Korean Raw Silk"],
        link : "/product/Formals/1",
      },
      {
        id: 16,
        name: "Rosaline",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8888-min.jpg?alt=media&token=ba776140-0d53-4bbb-a4b7-23505ed7c35f",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8895-min.jpg?alt=media&token=7f9d3914-495d-4f9a-bd6a-a9d876255258",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8900-min.jpg?alt=media&token=57854b5f-0544-4d33-abd8-b8be2b4d7c7b",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8903-min.jpg?alt=media&token=8914cb25-0f84-4d6f-b48d-9dfb598eed9f",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8907-min.jpg?alt=media&token=29b22da4-f73a-49d1-8465-83582aa8d6a7",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8911-min.jpg?alt=media&token=0fdb1e32-4beb-48cc-9324-ca6c616e3595",
      ],
        price: 95000,
        description: "A Ravishing fresh pink ensemble including a beautiful long raw silk shirt with hand embelishment detailing on neckline, paired with straight fit trouser and hand embelished chiffon dupatta.",
        fabric: "Wool",
        sizes: ["S", "M", "L", "XL"],
        type: "3 PC",
        shirt :"Pure raw silk",
        trouser : "Pure Raw Silk",
        options: ["Pure Raw Silk", "Korean Raw Silk"],
        Dupatta : "chiffon dupatta",
        link : "/product/Formals/2",
      },
      {
        id: 17,
        name: "Layla",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8923-min.jpg?alt=media&token=d3a8945f-2de2-4eba-bc02-dfbc2fdbfeae",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8925-min.jpg?alt=media&token=0a077f7b-c69b-4727-85d6-65e646a15b25",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FFormals%20Compressed%2FIMG_8937-min.jpg?alt=media&token=c2b6a46d-6d31-4faa-b7f5-c40cfc948dca",
      ],
        price: 135000,
        priceof2 : 95000,
        priceofshawl : 40000,
        description: "A neavy blue zardozi outfit with pure zari shawl is sophisticated and royal ensemble , ideal for weddings,receptions or festive evenings. the deep neavy hue paired with intricate gold and resham zardozi work creates a striking balance of elegance and opulence.",
        fabric: "Wool",
        sizes: ["S", "M", "L", "XL"],
        type: "Sweater",
        shirt :"Pure raw silk",
        trouser : "Pure Raw Silk",
        options: ["Pure Raw Silk", "Korean Raw Silk"],
        Dupatta : "chiffon dupatta",
        link : "/product/Formals/3",
      },
      {
        id: 18,
        name: "Haya",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FNikah%2FPicsart_24-12-24_12-36-32-558~2-min.jpg?alt=media&token=486cb058-aab3-4b54-b749-8622630bf434",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FNikah%2FPicsart_24-12-24_12-40-36-216-min.jpg?alt=media&token=d6cde9ba-ed53-4a4b-ad67-e8c6d08d4eda",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FNikah%2FPicsart_24-12-24_12-43-42-890-min.jpg?alt=media&token=21bb825a-b1fe-4988-9330-ffa290d2cffa",
      ],// Replace with actual URL
        description: "A stunning Nikah bridal ensemble with traditional off-white and gold tones, featuring intricate zardozi embroidery, modern sleeve cut-outs, and a regal silhouette.",
        fabric: "Leather",
        type: "Jacket",
        disclaimer : "DISCLAIMER : Colors may vary due to lightening effects",
        pieces : "Shirt, Ghrarah ,dupatta",
        link : "/product/Bridals/1",
      },
      {
        id: 19,
        name: "Miva",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FBarat%2FIMG_9413-min.JPG?alt=media&token=8b744945-63e9-4596-8973-e0c2b66e33f9",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FBarat%2FIMG_9412-min.JPG?alt=media&token=e88d3dbc-e482-4aad-a5f6-253889b0119e",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FBarat%2FIMG_9414-min.JPG?alt=media&token=b87a5445-c7e5-4694-b7f5-af522b1b82c8",
      ], // Replace with actual URL
        description: "This dress captures a regal bridal look featuring a deep red traditional outfit, intricately adorned with gold zardozi. The ensemble includes a richly hand embellished kameez paired with a flared lehnga, both embellished with ornate floral and geometric patterns in shimmering gold zardozi work.",
        fabric: "Leather",
        type: "Jacket",
        disclaimer : "DISCLAIMER : Colors may vary due to lightening effects",
        pieces : "Shirt, lengha ,dupatta",
        link : "/product/Bridals/2",
      },
      {
        id: 20,
        name: "Kaynat",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FWalimah%2FPicsart_24-10-29_13-51-33-439-min.jpg?alt=media&token=a48b4223-2f76-4940-8bf8-fe0031236a3b",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FWalimah%2FPicsart_24-12-24_12-15-20-880-min.jpg?alt=media&token=eb4fbd4b-5ba8-4610-8bc3-bdf63692a625",
      ], // Replace with actual URL
        description: "An ice blue maxi with a trail. The long dress is heavily embellished, featuring intricate silver zardozi and a stunning combination of thread work",
        disclaimer : "DISCLAIMER : Colors may vary due to lightening effects",
        pieces : "dupatta,Trouser",
        link : "/product/Bridals/3",
      },
      {
        id: 21,
        name: "Riona",
        images: [
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FTMP_8311.JPG?alt=media&token=d6ac7042-61ad-416a-9f8b-8b8c87e0cef4",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FTMP_8222~2.JPG?alt=media&token=90227fc3-0b61-497b-b58f-509a0c652879",
          "https://firebasestorage.googleapis.com/v0/b/devrex-628fe.appspot.com/o/Pindis%2FBridals%2FTMP_8287-1.JPG?alt=media&token=40dbcaad-3194-4d78-9cb3-8d9872768e04",
      ], // Replace with actual URL
        description: "A classic red bridal ensemble featuring a front open raw silk A-line shirt.This bridal adorned with detailed zardoze and resham in hues of coral, pink and gold.Paired with matching intricately handworked tissue dupatta, and a lehnga with a trailing silhouette which exudes grandeur and elegence. it is a masterpiece of the finset zardozi, rehsam and sequins.",
        disclaimer : "DISCLAIMER : Colors may vary due to lightening effects",
        pieces : "dupatta,Lengha Trail,Lengha",
        link : "/product/Bridals/4",
      },
]

const AllProductsPage = () => {
    return (
        <div className="all-products-page">
          <h1>All Products</h1>
          <div className="all-products-list">
            <div className="grid">
              {allProducts.map((product, index) => (
                <div key={index} className="product-item">
                  <Link to={product.link} className="product-link">
                    <div className="image-gallery">
                      <img
                        src={product.images[0]} // Display the first image in the images array
                        alt={product.name}
                        className="item-image"
                      />
                    </div>
                    <div className="p-4">
                      <h2>{product.name}</h2>
                      <p className="item-price">
                        {/* Format the price with commas, and add "PKR" if price is available */}
                        {product.price ? (
                          <span>{parseInt(product.price).toLocaleString()} PKR</span>
                        ) : (
                          <span>Contact for Price</span>
                        )}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };

export default AllProductsPage;