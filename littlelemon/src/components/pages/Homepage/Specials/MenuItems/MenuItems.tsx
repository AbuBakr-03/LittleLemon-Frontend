import styles from "./MenuItems.module.css";
type propType = {
  dish: string;
  name: string;
  price: string;
  description: string;
};
const MenuItems: React.FC<propType> = ({ name, price, description, dish }) => {
  return (
    <div>
      <img
        className={`aspect-square h-64 w-full rounded-t-lg object-cover`}
        src={dish}
        alt={name}
      />
      <div className={`${styles.bg} grid gap-3 rounded-b-lg p-6`}>
        <div className={`grid grid-cols-2`}>
          <h1
            className={`font-markazi h-16 justify-self-start text-2xl lg:h-8`}
          >
            {name}
          </h1>
          <h2
            className={`font-markazi justify-self-end text-2xl ${styles.price}`}
          >
            {price}
          </h2>
        </div>
        <p className={`font-karla h-36 overflow-hidden text-ellipsis text-sm`}>
          {description}
        </p>
        <p className={`font-markazi text-xl`}>Order Delivery</p>
      </div>
    </div>
  );
};
export default MenuItems;
