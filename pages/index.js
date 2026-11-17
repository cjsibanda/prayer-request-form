/*************************************
* CJ 11/10/2026
* index.js
* connects components to the homepage
* imported styling from styles/main.css
**************************************/
import Header from "../components/Header";
import PrayerRequestForm from "@/components/PrayerRequestForm";

export default function Home() {
  return (
    <main>
      <Header />
      <PrayerRequestForm />
    </main>
  );
}

