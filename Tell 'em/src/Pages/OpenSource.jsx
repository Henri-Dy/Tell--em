import React from 'react';
import { motion } from 'framer-motion';

const OpenSource = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.5 }}
      className='p-4 md:p-10'
    >
      <h1 className='text-lg uppercase text-center'>À propos</h1>
      <h2>Bienvenue sur notre plateforme</h2>
      <p>Notre plateforme est conçue pour offrir un espace où chacun peut s'exprimer librement et anonymement. Ici, vous pouvez partager vos pensées, idées et réflexions sur divers sujets sans craindre d'être identifié. Nous croyons que l'anonymat encourage l'honnêteté et la diversité des opinions, et nous sommes déterminés à maintenir cet environnement sécurisé et respectueux pour tous.</p>

      <h2 className='uppercase mt-5'>Titres</h2>
      {/* Daisy-UI accordion */}
      <div className="collapse collapse-arrow bg-base-200 mt-7">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">Pourquoi l'anonymat ?</div>
        <div className="collapse-content">
          <p>L'anonymat est au cœur de notre plateforme. En générant automatiquement des pseudonymes pour chaque utilisateur, nous assurons que personne ne peut être identifié personnellement. Cela permet à chacun de parler ouvertement et sincèrement, sans crainte de jugement ou de répercussions. Nous voulons que notre communauté soit un lieu de véritable échange et de liberté d'expression.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Notre Mission</div>
        <div className="collapse-content">
          <p>Notre mission est de créer une communauté où les idées peuvent être partagées sans restriction, tout en garantissant un environnement respectueux. Nous voulons que chaque utilisateur se sente libre de partager ses pensées, ses questions et ses expériences, et nous nous engageons à protéger cette liberté.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Conditions d'Utilisation</div>
        <div className="collapse-content">
          <h3>Introduction</h3>
          <p>Ces conditions d'utilisation régissent votre utilisation de notre plateforme. En accédant à notre site, vous acceptez de vous conformer à ces conditions et à toutes les lois et réglementations applicables. Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser notre plateforme.</p>
          <h3>Utilisation Anonyme</h3>
          <ul>
            <li><strong>Pseudonymes Automatiques:</strong> Tous les utilisateurs se voient attribuer un pseudonyme généré automatiquement. Vous ne pourrez pas choisir ou changer ce pseudonyme.</li>
            <li><strong>Confidentialité:</strong> Nous ne collectons ni ne partageons d'informations personnelles qui pourraient identifier nos utilisateurs.</li>
          </ul>
          <h3>Contenu Autorisé</h3>
          <ul>
            <li><strong>Liberté d'Expression:</strong> Vous êtes libre de parler de tout sujet, dans le respect des autres utilisateurs et de la loi.</li>
            <li><strong>Respect et Courtoisie:</strong> Les propos haineux, discriminatoires ou menaçants ne sont pas tolérés. Nous nous réservons le droit de supprimer tout contenu qui viole ces principes.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Participation et Contribution au Projet</div>
        <div className="collapse-content">
          <h3>Projet Open Source</h3>
          <p>Nous sommes fiers de notre engagement envers l'open source. Notre plateforme est un projet communautaire, et nous accueillons les contributions de développeurs du monde entier.</p>
          <h3>Comment Contribuer</h3>
          <ul>
            <li><strong>Soumission d'Idées:</strong> Pour participer activement au développement de la plateforme, vous devez soumettre une demande via le formulaire sur notre page de contact. Votre demande sera examinée, et si elle est approuvée, vous recevrez une branche pour contribuer.</li>
            <li><strong>Contribution au Développement:</strong> Une fois votre demande approuvée, vous serez invité à contribuer au dépôt public sur GitHub. Vous recevrez une branche spécifique pour vos contributions, qui seront ensuite révisées et potentiellement intégrées au projet principal.</li>
            <li><strong>Révision et Approbation:</strong> Toutes les contributions sont sujettes à révision avant d'être intégrées au projet principal. Nous nous réservons le droit de modifier ou de rejeter toute contribution qui ne répond pas à nos standards de qualité ou à nos objectifs.</li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Sécurité et Modération</div>
        <div className="collapse-content">
          <h3>Protection des Données</h3>
          <p>Nous prenons la sécurité de vos données très au sérieux. Bien que nous ne collectons pas d'informations personnelles, nous utilisons des mesures de sécurité avancées pour protéger les données anonymes de nos utilisateurs.</p>
          <h3>Modération</h3>
          <p>Notre équipe de modérateurs surveille les discussions pour s'assurer qu'elles restent respectueuses et conformes à nos conditions d'utilisation. Si vous rencontrez un problème ou un contenu inapproprié, veuillez le signaler immédiatement.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Conclusion</div>
        <div className="collapse-content">
          <p>Nous espérons que vous apprécierez l'utilisation de notre plateforme et que vous trouverez cet espace utile et inspirant. Nous sommes toujours ouverts aux suggestions et aux idées pour améliorer notre service, et nous vous encourageons à participer activement à notre communauté. Merci de faire partie de notre aventure, et profitez de votre expérience anonyme sur notre plateforme.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">Contact</div>
        <div className="collapse-content">
          <p>Si vous avez des questions ou des préoccupations concernant ces conditions d'utilisation, ou si vous souhaitez participer au développement de la plateforme, veuillez nous contacter via le formulaire disponible sur notre site. Nous serons heureux de vous assister.</p>
        </div>
      </div>


      {/* formulaire  */}


<form class="max-w-[54em] mx-auto mt-[4em]">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
 
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
  </div>
  <button type="submit" class="text-white bg-blue-700 mt- hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </motion.div>
  )
}

export default OpenSource;
