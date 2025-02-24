import Header from "../../HeaderAndNavbar/Header";
import MenuItems from "../Homepage/Specials/MenuItems/MenuItems";
import bruschetta from "../../../assets/Tomato-Bruschetta-Bread-6.jpg";
import greeksalad from "../../../assets/greek salad.jpg";
import lemondessert from "../../../assets/lemon dessert.jpg";
const Menupage: React.FC = () => {
  return (
    <>
      <Header></Header>
      <main className="grid justify-items-center">
        <h1 className={`my-6 mt-12 font-markazi text-5xl`}>Menu</h1>
        <div className={`my-6 mb-12 grid w-9/12 gap-6 lg:grid-cols-3`}>
          <MenuItems
            dish={bruschetta}
            name="Bruschetta"
            price="$5.99"
            description="An Italian favorite, our Bruschetta features crispy bread topped with
          a medley of vine-ripened tomatoes, fresh basil, and garlic. Drizzled
          with extra virgin olive oil and balsamic glaze, every bite bursts with
          rich, tangy, and herbaceous flavors."
          ></MenuItems>
          <MenuItems
            dish={greeksalad}
            name="Greek Salad"
            price="$12.99"
            description="A Mediterranean classic, our Greek Salad is made with romaine lettuce, vine-ripened tomatoes, crisp cucumbers, and sliced red onions. Tossed with Kalamata olives and feta cheese, it's drizzled with our signature olive oil and oregano dressing for the perfect balance of tangy and savory flavors. "
          ></MenuItems>
          <MenuItems
            dish={lemondessert}
            name="Lemon Dessert"
            price="$4.99"
            description="A perfect balance of sweet and tangy, our Lemon Dessert is a refreshing treat that melts in your mouth. Made with zesty lemon curd, a buttery crust, and a light, airy texture, it’s finished with a dusting of powdered sugar for the perfect touch."
          ></MenuItems>
        </div>
      </main>
    </>
  );
};
export default Menupage;
