'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(true);
  const route = useRouter();
  if (user) {
    return (
      <div className={styles.page}>
        <h1>Página de Reservas</h1>
        <button onClick={() =>
          setUser(false)}> Usuário
        </button>
        
      </div>
    );
  } else {
    return (
      <div className={styles.page}>
        <h1>Reservas </h1>
        <button onClick={() =>
            setUser(true)}> Voltar
        </button>

        <button onClick={() => route.push('/Perfil')}>Perfil
        </button>        
      </div>
    );
  }
}
