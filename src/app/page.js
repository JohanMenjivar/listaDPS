import styles from "./page.module.css";
import Company from "@/components/Company"; 
import data from "@/data/data.json"; // Importing the JSON file

export default function Home() {
  return (
   <main className={styles.main}>
    <h1>{data.descripcion}</h1>
    <div className={styles.grid}>
      <>
      {data.empresas.map((empresa,index)=>
        <Company 
          key={index}
        titulo={empresa.titulo}
        descripcion={empresa.descripcion}
        caracteristicas={empresa.caracteristicas}
        imagen={empresa.imagen}
        />      
      )}
      </>

    </div>
   </main>
  );
}