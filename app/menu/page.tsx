import React from 'react';
import StarterMenu from '@/Components/StarterMenu';
import ClientSection from '@/Components/ClientSection';

const App = () => {
  const menuItems = [
    {
      name: 'Alder Grilled Chinook Salmon',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
    },
    {
      name: 'Berries and creme tart',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlight: true, // This item will be highlighted with yellow
    },
    {
      name: 'Tormentoso Bush Pizza Pintoage',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
    },
  ];

  const menuItems2 = [
    {
      name: 'Optic Big Breakfast Combo Menu',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
    },
    {
      name: 'Berries and creme tart',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlight: true, // This item will be highlighted with yellow
    },
    {
      name: 'Tormentoso Bush Pizza Pintoage',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
    },
    {
      name: 'Spicy Vegan Potato Curry',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
    },
  ];

<<<<<<< HEAD
=======
  const menuItems3 = [
    {
      name: 'Optic Big Breakfast Combo Menu',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
    },
    {
      name: 'Fig And Lemmon Cake',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlight: true, // This item will be highlighted with yellow
    },
    {
      name: 'Creamy mascarpone cake',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
    },
    {
      name: 'Pastry, blueberries, lemon juice',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
    },
  ];

  const menuItems4 = [
    {
      name: 'Optic Big Breakfast Combo Menu',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
    },
    {
      name: 'Caffè macchiato',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '700 CAL',
      price: '43$',
      highlight: true, // This item will be highlighted with yellow
    },
    {
      name: 'Aperol Spritz Capacianno',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '1000 CAL',
      price: '14$',
    },
    {
      name: 'Caffe Latte Campuri',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '560 CAL',
      price: '35$',
    },
  ];

>>>>>>> e128186c34899842aa7d9e3b1cd96cda469f7517
  return (
    <>
      <div>
        <StarterMenu
          title="Starter Menu"
          items={menuItems}
          imageUrl="/img2.jpg"
        />
      </div>
      <div>
        <StarterMenu
          title="Main Course"
          items={menuItems2}
          imageUrl="/img3.jpg"
          reverse // Pass the reverse prop to change layout
        />
      </div>
      <ClientSection />
      <div>
        <StarterMenu
          title="Dessert"
          items={menuItems2}
          imageUrl="/img4.jpg"
<<<<<<< HEAD
=======
          
>>>>>>> e128186c34899842aa7d9e3b1cd96cda469f7517
        />
      </div>
      <div>
        <StarterMenu
          title="Drinks"
          items={menuItems2}
          imageUrl="/img3.jpg"
          reverse // Pass the reverse prop to change layout
        />
      </div>
    </>
  );
};

export default App;
