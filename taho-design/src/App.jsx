// src/App.jsx
import { useState } from "react";
import "./App.css";

export default function App() {

  const handleSubmit = async (e) => {
  
    const formData = new FormData(e.currentTarget)

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      
      window.location.href = "/merci-form.html";
    } catch (error) {
      console.error(error);
    }
    
  }




  return (
    <>
      <header className="header">
        <h1>TAHO DESIGN</h1>
        <p>Vente et installation de matériel électronique connecté</p>
        <a href="#contact" className="btn">Demander un devis</a>
      </header>

      <main>
        <section>
          <h2>Nos services</h2>

          <div className="cards">
            <article>
              <h3>Maison connectée</h3>
              <p>Installation d’équipements intelligents pour améliorer le confort, la sécurité et le contrôle de votre logement.</p>
            </article>

            <article>
              <h3>Matériel électronique</h3>
              <p>Conseil, vente et mise en place de matériel électronique adapté à vos besoins.</p>
            </article>

            <article>
              <h3>Installation sur mesure</h3>
              <p>Accompagnement simple, clair et personnalisé pour particuliers et professionnels.</p>
            </article>
          </div>
        </section>

        <section className="about">
          <h2>À propos</h2>
          <p>
            TAHO DESIGN accompagne ses clients dans la vente et l’installation
            de solutions électroniques connectées. L’objectif : proposer des
            installations propres, pratiques et faciles à utiliser au quotidien.
          </p>
        </section>

        <section id="contact" className="contact">
          <h2>Contact</h2>

          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            action="/merci-form.html"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required />
            <input type="tel" name="phone" placeholder="Votre téléphone" />
            <textarea name="message" placeholder="Votre demande" required />

            <button type="submit">Envoyer</button>
          </form>

          <p>Email : taho.design@outlook.fr</p>
          <p>Secteur : Saint-Étienne et alentours</p>
        </section>
      </main>

      <footer>
        <p>© 2026 TAHO DESIGN — Tous droits réservés</p>
      </footer>
    </>
  );
}