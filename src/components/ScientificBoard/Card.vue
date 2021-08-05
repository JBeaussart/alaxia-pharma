<template>
  <div class="card" v-for="person in people" :key="person">
    <hr />
    <div class="card_id">
      <div class="card_id_text">
        <h2 class="card_id_text_name">{{ person.name }}</h2>
        <p class="card_id_text_post">{{ person.post }}</p>
        <br>
        <p v-html="person.work" class="card_id_text_work"></p>
      </div>
      <div class="card_id_avatar">
        <img class="card_id_avatar_img" alt="avatar" :src="person.avatar" />
      </div>
    </div>
    <p v-html="person.description" class="card_description"></p>
    <br />
    <a v-html="person.link"></a>
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          name: "Isabelle Durieu",
          post: "MD, PhD",
          work: "Professor of Internal Medicine, Lyon, France <br />Director Lyon Adult Cystic Fibrosis Centre",
          avatar: "/src/assets/scientific_board/Isabelle-Durieu.png",
          description:
            "As the Director of the Lyon Adult Cystic Fibrosis Clinic at Centre Hospitalier Lyon Sud, Dr Durieu is responsible for the care of more than 300 adults with CF. Dr. Durieu is a Professor of Internal Medicine at the University of Lyon and Head, department of internal medicine, SouthHospital of Lyon. Dr Durieu is the President of the French Cystic Fibrosis society and member of the European Cystic Fibrosis scientific committee.<br><br>Dr Durieu, reviewer for International Journal, has published over 100 articles and book chapters and has lectured nationally and international lyon issues related to CF. She has had 20 years of experience with CF clinical care.",
          link: "",
        },
        {
          name: "Diana Elizabeth Tullis",
          post: "MD, FRCPC",
          work: "Professor of Medicine, Toronto, Canada<br />Director Lyon Adult Cystic Fibrosis Centre<br>Director Toronto Adult Cystic Fibrosis Centre<br>Associate Scientist, Li Ka Shing Knowledge Institute",
          avatar: "/src/assets/scientific_board/diana-elizabeth-tullis.png",
          description:
            "As the Director of the Toronto Adult Cystic Fibrosis Clinic at St. Michael’s Hospital, Dr Tullis is responsible for the care of 450 adults with CF. Dr Tullis is a Professor of Medicine at the University of Toronto, the Respirology Division Head at St. Michael’s Hospital, and an Adjunct Scientist at the Keenan Research Centre of Li Ka Shing Knowledge Institute. Dr Tullis is the Cystic Fibrosis Canada Chair in Adult CF Research.<br>Dr Tullis has published over 100 articles and book chapters and has lectured nationally and internationally on issues related to CF in adults. She has had 25 years of experience with CF clinical care. She was the Chair of the Clinic Subcommittee of the Medical/Scientific Advisory Board of Cystic Fibrosis Canada from 2005-2011 and in 2010 was a Coach for the Adult Quality Improvement Program run by the American Cystic Fibrosis Foundation.",
          link: "<a style='font-size: 18px' target='_blank' href='http://stmichaelshospitalresearch.ca/researchers/diana-elizabeth-tullis/'>http://stmichaelshospitalresearch.ca/researchers/diana-elizabeth-tullis</a>",
        },
        {
          name: "Pavel Drevinek",
          post: "MD, PhD",
          work: "Associate Professor of Medical Microbiology, Prague, CZ<br>Head of microbiology department",
          avatar: "/src/assets/scientific_board/pavel-drevinek.png",
          description:
            "As the Lead Microbiologist of the Prague Cystic Fibrosis Centre, Dr Drevinek dedicated his research career to studying the epidemiology, improving the diagnostics and understanding the pathophysiology of the Bcc infections in CF. Dr Drevinek is an active member of International B.cepacia working group and member of the board of the European Cystic Fibrosis Society.<br>Dr Drevinek, leading physician at the Prague CF center in regards to clinical trials, has published over 50 articles and book chapters and has lectured nationally and internationally on issues related to CF.Dr Drevinek is the coordinator of ECFS Standards of care Project.",
          link: "",
        },
        {
          name: "Michael Tunney",
          post: "PhD",
          work: "Professor of Clinical Pharmacy,<br>Queen’s University Belfast, UK",
          avatar: "/src/assets/scientific_board/michael-tunney.png",
          description:
            "Professor Michael Tunney is a Chair in Clinical Pharmacy at the School of Pharmacy, Queen’s University Belfast. He has an international track record in lung microbiome research with his translational research programme focusing primarily on the improved detection and treatment of lung infection in patients with respiratory diseases such as cystic fibrosis (CF), non-CF bronchiectasis and COPD. He has published over 100 research papers in peer-reviewed journals and serves on a number of scientific advisory boards as well as editorial boards.",
          link: "",
        }, 
        {
          name: "Annie-Claude Benichou",
          post: "Md",
          work: "Chief Medical Officer,<br>Alaxia, Stragen Healthcare Group",
          avatar: "/src/assets/scientific_board/annie-claude-benichou.png",
          description:
            "Dr. Benichou has more than 23 years of experience in the management of clinical development of drugs and high-tech medical devices in Europe and in the USA. After she earned a medical degree from the University of Toulouse in France, she obtained inter-university degrees in methodology for clinical development, in pharmacovigilance, and in pharmaco-epidemiology. In 2004, she joined the Stragen Group for the clinical development of an orphan drug in onco-hematology (FDA approved in 2012) as well as for project coordination with the European Medicines Agency, and endorsed the Global Qualified Person for Pharmacovigilance role and responsibilities since 2007. She is now managing a sister company within the Stragen Group, dedicated to services in clinical development strategy and pharmacovigilance. She has the CMO position within Alaxia’s development team since January 2011.",
          link: "",
        },
        {
          name: "Victor Juarez-Perez",
          post: "PhD, MBA",
          work: "Scientific Adviser,<br>Stragen Healthcare Group",
          avatar: "/src/assets/scientific_board/victor-juarez-perez.png",
          description:
            "Doctor Victor Juarez-Perez is the Scientific Advisor of the Stragen Healthcare Group and responsible of the preclinical development of drug candidates. He has an experience on translational research acquired on international and multidisciplinary innovative driven programs in diverse areas as gene therapy, immunology and microbiology. He has published about 15 papers in peer-reviewed journals and serves as reviewer for technological transfer offices in France and Latin-America.",
          link: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card_id {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card_id_text_work {
  font-size: 14px;
}
.card_id_text_name {
  font-size: 22px;
  text-decoration: underline;
  text-underline-offset: 2px;
  margin-bottom: 10px;
}
.card_id_text_post {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 4px;
}
.card_id_avatar_img {
  width: 120px;
}
.card_description {
  font-size: 18px;
  line-height: 30px;
}

hr {
  margin-top: 30px;
  margin-bottom: 20px;
  border-top: 1px solid #025293;
}
</style>