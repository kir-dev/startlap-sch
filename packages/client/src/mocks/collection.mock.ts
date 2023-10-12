import { Collection } from "@/types/collection.type";

export const CollectionMock1: Collection = {
  id: "123",
  iconUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
  bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
  slug: "123",
  name: "BME",
  links: ["123"],
};

export const CollectionMock2: Collection = {
  id: "234",
  iconUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
  bannerUrl:
    "https://images.unsplash.com/photo-1688551658117-f2be980a75b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  slug: "234",
  name: "Simonyi",
  links: ["234"],
};

export const DummyCollections: Collection[] = [
  {
    id: "001",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "001",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "002",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "002",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "003",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "003",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "004",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "004",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "005",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "005",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "006",
    iconUrl:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEVkvEj///9gu0NYuDeMynbl8t9/xWbc7dReukBZuDlfukJiu0VXuDVZuTr8/fpYuDVuv1GFyHJ5w19pvUv0+fHX68/E4rnr9ea43auy2qTT6crM5sLw9+zf79iOy3iEx22m1ZWb0IiWzoLH5L2n1Zd1wVqv2aC+37JNtCOZz4Wg0o6xmCMkAAAM10lEQVR4nO1d2ZqbOgzOYEJsbJYQsmeyL2fy/g94kk4HyyyGgAxpy3/Tfp0pWEjWZkkeDHr06NGjR48ePXr06NGjR48ePXr06NGjRw9kcG79gPOuF4MK7lKPBYKGl/EPwpCKgDHq/vGUcuoFVnS8nqZz/0OB78+np+sxsgKP/qlkWpSxaH8apkhLwR+e7lHA/jwqLc+LllM9cRLx9HrxPKvrRVeH5bHtaVORuh9sTjb7M4jkjNnrqsxLsXJmB28vrha5LOJa5P3m5CIk78xISrbTBuR9Y2UL2jUhBaDsPm9M3xPzA3lHGinZVxLPSls03r8djS47a+h7WPfb9T52JmE4oIMwnOx29+ttlPYCFBoPxO2aKABLbIuMQzxaHKOH7WeUPt3Rp6bkTweV/vq36Ov2WUTm3BZvo1dZ9JnPuuk5YkTnfD5cVsKcItdgevFapKIYLr3lLW9zs2k1Z+zh3tHtOlcIFuwNTIcY52xA/7RjLy3u6Qbl+QkbhxhbecWVsVl2WZ+HOv6Xxeh9mH3YrVs2MifLwFMk6mpBGjjrLBsvDHXNr4AHy4x43iaNvrlFJlmhOAu0Jb+4Gppx0RaW11TDc5alcUU7kVQapSX0NEDR7pyFq7Skhh24OOSYWsWnQ7AsNBdOWufYrZtGkdqC/kFgSpIV3FO2o+3NSFJ7ZcWxxYhOUqK6aJNELtS3+0cDLiQXB5WNq/ZI5Ez1Q0foDPwGnQy7IZET9cVXYzEADxadkMgUAv2dSZeDbDsgUSgiOh+YtVT0smmbRKIomSmaDSyCpe6JtXEShWImZi18Uh4o3rhpo0Gubb7tN4QSYu+NejdUcdWWbWlvoajUscGdb0XwTff2LLBCoh+aizQY1GutcfAJhcS5MfskYDzYqpuY0nCmFKoHtUwbWlSBgBr1bmQrKptw2n5iwYN20chWhJtwHhh4QQk4hQswsBVhROiHXeTbrQvUc+hW0R2Dx5u0SBoo1jjCllMoo8uu8tDQuZkjawIP2KNR+bM5N1P2FABtc0UVJA62gD/Qr51TwibhLprQAD0hz0OwjgnmN4S2/qj9dq64LEffiVR/OBsT5NoKepYLwbT7ri2fq41BreBLTeHEC+QIGcbfDp6IEFmB4FsappBMIvfxH86oaRwop0M0JtKDfOqhmCXpvFGykAkmGxnwHbdYR/1EHlBoPhtno1wCn8kqTBIDabc2SEyEu7tY9DnLOd78ASaJUCl84TARfDSN+gryqxV+44JoN4SUFRz/GO7CYlNIcssVEsSITITGeYvx5YRUpLNCd9ca55AFcUL09ECo+ImwE62dXGaxF0GUirbR2b44XzPlYAXReEEmRs1NEcgAzwqDMijJH6NQUItbrseg9RghMpFIJp4aR1HQwhZHhUCSP5bSwjMHsBEx3OEy3eA33uBUnvWuC7lgOZKQK9wZFMjTDTEsB+p035REsMF2hUygUhxTCRwgvpv/CBqEVA5NXTfAHc2jwOFJWpKF/NEQE0D6m+kaT2ZnNOJAk+2WiTzcdMkGOhbNxJQlLqlfrCiANso65tQ0hc38GmAMV8XaHvxWVmQITu23Bo3ElElfTOMfAQovWQo1DjkOlk3ElCUMiDW6XkuhME7hsIEvATbYWuM7AANsZzjNXm0Peh0NUlJ0nzzlqI3Ekl/LKDYe5a0JF/q1aeFJ/0/7mSSfMlG3p4+qUFDsL5dCxr6fWlkHXyJlNfkk+Ym/s1GxS3REfXsBtqHerLoHSYd67gUSrSNhoQKcmdbeh+5X8oyxPjAAZn0OMmscHjRosnT1Vie9pdqRPrCGJavzTpKSePe70pSzAUiVY+Yxvh8v9Vtti0iS5FKZyYFR5MOy7BjxWBAuYJCPe5DyhNRvq7qqRj6iVFsxVWXGn+uR6q1t8A9tvVXThwPGlFcGsJLWPBu/Ew0E5zWfYMnUa3Hwm/yyk0dXgoWBQ1WwvprON/BoKvhFVBcIrkxUNsCgrZ6EyJ60SnLuFZNoqCpUBt41lSlLdvKw0k5m44JmyYWh2hQZ+dT022Rkt6qWlKSTvE7u2DZV2CAPu2qaC+mVVk2FcLFNR/T+ghnr55WdgTU9U5EIXfWcpBuMV0BWP/fUYJ27TGJu6lFoJQu9v8AGy2PO/jabrmbXLTfbcy6VvV9LlQFlXG4OFTzntjCPGW+pkyFNvdw+oDCbm3gLgCO9WoV2IP/QSaFeOZpS2PT/m8c/QOHub6cQaIq/lMJ/QEqb6lJ5fotQDmACjSl8f3vYUNMACktyiV2hqdc2YDU871YBKKzneQcJhWeTFFoPJ3bA+YC97MjKJETN6ClIYr2bMQq5R7ezYew/sBktd6/NT5THJTWPEEkSQk8NBXmchScl87G5vtL43jjGB5/IDIWUnz4yOAeV2SjzNDWrkWQIrTvirg9i52au5pXnmNCmisK9J2814dSkZ4dI2NXWC8K7Yz1zBgyqAYMo8svev19XiURwvFbT6QLnt/jmgmgIrEiiPLfQVDPpIc+edJUYtUC3+aT9RlylvIIl2dnax9wIjygCLRkQWaF7DBx31WYAKKpE1jTqlLd4dj98nVcK0eUVJMBvrr2JLClKKDXxcnGwyCY+MI+6LmUUKtfyNlhQHvFithMsRJ6UYxb4KjWdHyM3YYAHp4eVMhHUDtTXgwFCyUoeZNTy2HBgA7gT+YNpmaspe5UaFLaBz4Rp84H0x6qrTUHbRgljgKQ3CAyATb0LvCrt/2RZQ7rIBjSLlGx9KnvYGqQggM2fT0domCbyFaeFHySHSo70ZClMbXv/6zGGi0Oz/SCiopcBPn6j2I4Wesc4yFaxyJBtpF04aBlslGMxXR2aU3BbMTMBunSa9XQHZuvQs1FPRQrBGJJhM0NGtSFAY2SL3UjiC2u3F6gyaxj3wEY4A8i2OJDE5ms1DSgyazp4wHCpfVpKXekM6IoZqUw/lPo+ZQClX8OLg4NIiv4iJYrgg+paMoGeaVDG/kOidBUdilO/TIGGjhROgXFwvoY30O1rHhKAOKBKWFoJgAX+BZBIDpJ0XXMo4HRaCGoA6hqsXl7gU37445/xvK6Ao7Y0Laew0hNjwIlMfeMxUUlirHcBY4zQI1RqurZhwMI1RtwKG9HRmAjGNDywWc1mIzVzo2EhHKqAsyAw2Aej/f0XyoyQbnsBPwtpqJoFB1EgJU7V4v4MdJ4YsIVoMgU+ONoJBt3lEJa8RTeoicIUCNJqgPnB0M7f0OSE44nO2IPzKrw5DaD9HW9wAM25OeJbRLnmFXCIBeKgKGgT8UYXuYPc66+W2gNE2LCJmR2DIwXx5vnxnCuGRvrbc+CQmAXmYQrnwFohTilxgy28JyieRfoTYDjbEPnYFqpo1C40i9Hxcv05HE5nZ6fsehpuwaQ48okfVDbIDSIW9YgQVYpN4GA89C4VxUSfu7lpioDMX9lswxpg0JVEHU9WFUpnFXZH6hNQTk0OnC6CMqDVSCeVok83rd/kyznQMmbKX1Q/y1ARUSE4g5nbnaFOI6V+ot1p0OpEv6sxTadcbWH+HgYJ9d4Xg5dccBp3QqJK4MZoLahyUtMWiSqBvi62ag5qQxJHrA2Nmrq5x7Qt9vbwbdpQDgkWV86/jsaVuFpSuLmY9m7oRUnC7VuwUqmiQtvsK1MX2LVzqUaKRHMXWj1jZPWYva1LNVIkTqmpXmY6GHVCYIbEeGemH53Yaq7q2qKPoZyhPD+ugSvf3fQ1tftW/USxV98+x2YjF+NUlmrbctjtpUdEzCim3aA8dW0u7kzwamu4pL6xfw+wNI7LzqnvN590cNO6RdMz2Oc2yl2kljim06gr5CsWKiJtrB4Y2rXvc/6BK+zMyVubSlRFzryW4TZosmGoOGboi3cdXiLvZq91/pjv69w7/oTl0XO2ymzd8Q3y4p5Z0oc/c4KXNw6nwjllexT8Q2cS+oPMvb3fjFxeyAsNkxYNLsu8IsG14UtAK4GLY+5B4HDpMK8CKzllzFnk1kButga9+ldAiyoY49U5YoTRgptbuEUZodF1VXBUujQ3nuhleOE6f5HP8Xu3uzNhD1BK3V9VX+7jb89/CHf32Wdhe9B60HJKVg8unKI7WL7pHE5vi/3+OH7iuH8OIRpqp/StLsZvqX0VlnByD61rYe28yQZUYZGoUFZfwuxiIBjDgcUmy5IJkaXYXLn3jvz7wUP1b5sI68pmb2AAS2AxvtfeG1RM3oF37KFVBadkcliVdImmEK8OlLyP+SsHdxndLUbVqPSnD/fnjax7ZViUMOc+09q9zefsHhHzw+vMgT/9snB8X5ym87nvf/P08ed8vjot7rvw6dO9s+asiIf/ST0WBIGg4RNMPP7+8MqL/NU/GvyJrhfRo0ePHj169OjRo0ePHj169OjRo0ePHj3+TvwP9Dy45eHh/r0AAAAASUVORK5CYII=",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "006",
    name: "Kolis élet",
    links: ["236"],
  },
  {
    id: "007",
    iconUrl:
      "data:image/png;base64,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",
    bannerUrl: "https://images.unsplash.com/photo-1550148052-b28769d7918d",
    slug: "007",
    name: "Kolis élet",
    links: ["236"],
  },
];
