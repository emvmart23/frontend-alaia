import { useState } from "react";
import styles from "./OrderCard.module.css";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../../../components/ui";
import { Clock, Eye } from "lucide-react";

export default function OrderCard() {
  const [data, setData] = useState([
    {
      id:1,
      name: "Max",
      orders: [
        {
          id: 1,
          name: "Collar Bañado en Oro 18K",
        },
        {
          id: 2,
          name: "Collar Bañado en Oro 18K",
        },
      ],
    },
    {
      id:1,
      name: "Max",
      orders: [
        {
          id: 1,
          name: "Collar Bañado en Oro 18K",
        },
        {
          id: 2,
          name: "Collar Bañado en Oro 18K",
        },
      ],
    },
    {
      id:1,
      name: "Max",
      orders: [
        {
          id: 1,
          name: "Collar Bañado en Oro 18K",
        },
        {
          id: 2,
          name: "Collar Bañado en Oro 18K",
        },
      ],
    },
  ]);

  return (
    <div className={styles.containerOrders}>
      {data.length == 0 ? (
        <div>No hay ninguna orden</div>
      ) : (
        data.map((item, index) => (
          <Card className={styles.containerCard} key={index}>
            <CardHeader className={styles.containerHeader}>
              <div>
                <CardTitle className={styles.orderId}>Pedido #ORD-20</CardTitle>
                <p className={styles.orderDate}>8 sep 2026, 4:30 PM</p>
              </div>
              <span className={styles.orderStatus}>
                <Clock size={15} />
                Pendiente
              </span>
            </CardHeader>
            <CardContent className={styles.content}>
              <ol className={styles.orderList}>
                {item.orders.map((i) => (
                  <li key={i.id} className={styles.item}>
                    <figure className={styles.imageContainer}>
                      <img
                        src="https://res.cloudinary.com/dkfoa4nu2/image/upload/v1780639911/hero-jewelry-03_gj7u44.jpg"
                        alt="Collar Bañado en Oro 18K"
                      />
                    </figure>

                    <div className={styles.details}>
                      <h3 className={styles.title}>{i.name}</h3>
                      <p className={styles.quantity}>Cant: 1</p>
                      <p className={styles.price}>$85.00</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className={styles.detailsProducts}>
                <Eye size={15} />
                <p>+5 productos</p>
              </div>
            </CardContent>
            <CardFooter className={styles.footer}>Total $170.00</CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
