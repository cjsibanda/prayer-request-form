/*************************************
* CJ 11/3/2020
* index.js
* connects components to the homepage
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
