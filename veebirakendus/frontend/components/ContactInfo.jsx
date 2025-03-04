/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ContactInfo = () => {
  const router = useRouter();
    const { id } = router.query;
    const [time, setTime] = useState(null);
  
    useEffect(() => {
      if (id) {
        const foundProduct = data.find((item) => item.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("ERROR_PRODUCT_IS_NOT_FOUND");
        }
        const productReviews = dataReview.filter(
          (review) => review.productId === parseInt(id)
        );
  
        const reviewCards = data.find((item) => item.id === parseInt(id));
        if (reviewCards) {
          setReviewCard(reviewCards);
        }
        setReviews(productReviews);
      }
    }, [id]);
  
    if (!product) {
      return <h2>Loading product..</h2>;
    }

  return (
    <div>
      <p>
        <Link href="mailto:example@gmail.com">
          example@gmail.com
        </Link>
      </p>
      <h1>Planeeri lendu!</h1>
      <p>Tekst</p>


      {/* Lennude leidmise section */}
      <section >
        <h2>Lennuinfo</h2>
        <search>
          <form method="submit">
            <input name="searchBar" id="search" placeholder="Leia lendu.."/>
            <input type="submit" name="submit" value="Otsi"/>
          </form>
        </search>
        <p>
          
        </p>

      </section>

      <form method="submit">
        <p>Vali firma:</p>
        <section>
        <select>
          <option> Airbaltic</option>
          <option> Ryanair</option>
          <option> SAS </option>
          <option> Finlandia</option>
        </select>
        </section>
        
        {/* sihtkoht, lõppkoht */}
        <section>
          <select>
          <option> New York</option>
          <option> London</option>
          <option> Dubai </option>
          <option> Madrid</option>
          </select>
        </section>

        <section>
        Vali sihtkoht: <input type="text" placeholder="Sisesta sihtkoht ..."/>
        </section>
        <section>
        Vali lõppkoht: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>
        <section>
        Sisesta eesnimi: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>
        <section>
        Sisesta perekonnanimi: <input type="text" placeholder="Sisesta lõppkoht ..."/>
        </section>
        <section>
        Vali istekoht: 
        <select>
          <option> A</option>
          <option> B</option>
          <option> C </option>
          <option> F</option>
        </select>
        </section>
        <section>
        Vali eelistusi:
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
          <label for="vehicle2"> I have a car</label>
        </section>

      </form>
    </div>
  );
};

export default ContactInfo;
