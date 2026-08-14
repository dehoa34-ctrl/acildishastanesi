export type DentistProfile = {
  name: string;
  title: string;
  clinic: string;
};

export const dentists: DentistProfile[] = [
  { name: "Dr. Nilgün Çetinkaya", title: "Kurucu Hekim / Yönetim Kurulu Başkanı", clinic: "Genel Merkez" },
  { name: "Dr. Nuri Yılankırkan", title: "Mesul Müdür / Baş Hekim", clinic: "Beykent" },
  { name: "Dr. Sinem Balkanlı", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Beylikdüzü" },
  { name: "Dr. Onur Er", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Avcılar" },
  { name: "Dr. Sinan Kılıç", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Esenyurt" },
  { name: "Dr. Enis Yardımcı", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Sefaköy" },
  { name: "Dr. Ece Er", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Ambarlı" },
  { name: "Dr. Sihem Topacık", title: "Mesul Müdür / Baş Hekim", clinic: "Acıbadem" },
  { name: "Dr. Zekeriya Demir", title: "Genel Diş Hekimi / Mesul Müdür", clinic: "Esenyurt/Agora" },
  { name: "Uzm. Dr. Aslıhan Atak Kocaman", title: "Ortodonti Uzmanı", clinic: "Genel" },
  { name: "Uzm. Dr. Mert Demircioğlu", title: "Ortodonti Uzmanı", clinic: "Genel" },
];
