import { Food } from "./food";


export const FOODS: Food[] = [
    {
      id: 1,
      name: 'Tea',
      imageUrls: [ '../assets/tea-milk.svg', '../assets/tea-black.svg','../assets/tea-green.svg'],
      flavors: [
        { name: 'milk', color: '#F0D0A2' },
        { name: 'black', color: '#F4AE40' },
        { name: 'green', color: '#D8F1A0' },
      ],
      selectedFlavor: '',
      qty: 1,
      note: ''
    },
    {
      id: 2,
      name: 'Coffee',
      imageUrls: ['../assets/coffee-black.svg', '../assets/coffee-milk.svg'],
      flavors: [
        { name: 'black', color: '#A55B41' },
        { name: 'milk', color: '#F9D2A2' },
      ],
      selectedFlavor: '',
      qty: 1,
      note: ''
    },
  ];
  
