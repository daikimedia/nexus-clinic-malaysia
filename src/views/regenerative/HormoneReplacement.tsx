"use client";

import { motion } from "framer-motion";
import {
  Moon,
  Heart,
  Calendar,
  ChevronRight,
  MapPin,
  Phone,
  Award,
  Users,
  AlertCircle,
  CheckCircle,
  Activity,
  Wind,
  Droplet,
  ThermometerSun,
  Star,
  Cloud,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
} from "../../lib/animations";
import { useTranslation } from "@/src/i18n/client";
import { fallbackLng } from "@/src/i18n/settings";

const HormonReplaceLanding = ({
  locale = fallbackLng,
}: {
  locale?: string;
}) => {
  const { t } = useTranslation(locale, "regenerative/hormoneReplacement");

  const images = {
    heroWoman:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    consultation:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    clinic:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&auto=format&fit=crop&w=1191&q=80",
    hormones: "/images/regenerative/hormone-replacement.webp",
    wellness:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1220&q=80",
  };

  return (
    <div className="bg-cream min-h-screen font-inter">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-cream to-light pt-16 lg:pt-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-8">
              <div className="inline-block bg-wine/10 text-wine px-4 py-2 rounded-full text-sm font-medium mb-4">
                HRT Malaysia: Hormone Replacement Therapy for Menopausal Women | Nexus Clinic KL
              </div>
              <h1 className="font-georgia text-4xl lg:text-5xl xl:text-6xl text-brown leading-tight">
                HRT Malaysia: Evidence-Based Hormone Replacement Therapy for Menopausal Women and Bioidentical Hormones
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-rose font-medium">
                  Hot flashes that interrupt every meeting. Night sweats that have not allowed a full night's sleep in six months.
                </p>

                <p className="text-lg text-taupe">
                  Mood swings and a brain that does not feel like your own. A body that seems to have changed shape, energy and resilience without explanation. These are the menopause symptoms that most menopausal women in Malaysia are told to simply accept.
                </p>

                <p className="text-lg text-brown font-medium bg-wine/5 p-4 rounded-lg">
                  They are not exaggerations and they are not simply normal ageing. They are the documented physiological consequences of oestrogen withdrawal at menopause, and hormone replacement therapy is the most effective treatment for them that medical science has produced.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="relative">
              <div className="relative z-10 bg-glass backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Doctor-guided, confidential care
                      </p>
                      <p className="text-taupe text-sm">
                        in the heart of Kuala Lumpur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Personalised hormone balancing for men and women
                      </p>
                      <p className="text-taupe text-sm">
                        (not a one-size-fits-all package)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Central KL location near KLCC
                      </p>
                      <p className="text-taupe text-sm">
                        LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang,
                        50450 Kuala Lumpur.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Contact
                      </p>
                      <p className="text-taupe text-sm">
                        016-7025699 / 03-21635699
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-wine shrink-0 mt-1" />
                    <div>
                      <p className="font-georgia text-brown font-medium">
                        Clear follow-ups and safety monitoring
                      </p>
                      <p className="text-taupe text-sm">
                        because HRT should never be rushed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Hormone Replacement Therapy in Malaysia at a Glance Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            Hormone Replacement Therapy in Malaysia at a Glance: HRT, Hormones and Menopause Symptoms
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Factor</th>
                  <th className="p-4 text-left text-brown font-georgia">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr>
                  <td className="p-4 font-medium text-brown">What HRT Treats</td>
                  <td className="p-4 text-taupe text-sm">Vasomotor symptoms: hot flashes, night sweats, palpitations | Genitourinary syndrome: vaginal dryness, recurrent UTIs, urinary urgency | Mood and cognitive: mood swings, low mood, brain fog, poor concentration, sleep disturbance | Musculoskeletal: joint aches, reduced muscle mass | Bone: osteoporosis and conditions like osteoporosis prevention in early postmenopause</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Malaysian Menopausal Age</td>
                  <td className="p-4 text-taupe text-sm">Menopause is a natural biological stage; median menopausal age of Malaysian women is approximately 50.7 years; the natural menopause range in Malaysia is 42 to 58 years; the ages of 45 and 55 encompass most women's experience of the end of her reproductive years; premature menopause and premature ovarian insufficiency (POI) can occur before age 40 years old; perimenopause can begin 4 to 10 years before the final period</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Type of HRT</td>
                  <td className="p-4 text-taupe text-sm">Oestrogen-only HRT: oestrogen-only HRT is usually prescribed to women who have had a hysterectomy and do not need progestogen; combined HRT: oestrogen and progestogen combined, prescribed to women with a uterus; bioidentical hormone replacement therapy: regulated pharmaceutical oestradiol and micronised progesterone; transdermal, oral or local vaginal delivery</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Who Needs Progestogen</td>
                  <td className="p-4 text-taupe text-sm">Women with an intact uterus must take progestogen alongside oestrogen to protect the endometrium and reduce the risk of uterine cancer; women with a uterus who take oestrogen without progestogen have significantly elevated risk of uterine cancer; women who have had a hysterectomy can take oestrogen alone; women experiencing combined HRT take oestrogen and progestogen together</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Formulations Available</td>
                  <td className="p-4 text-taupe text-sm">Transdermal oestradiol gel or patches (preferred route in women with VTE or cardiovascular risk) | Oral oestradiol tablets | Combined HRT tablets (oestrogen and progestogen) | Vaginal oestrogen cream, ring or pessary (local only) | Therapy with an intrauterine progestin (levonorgestrel IUS as progestogen component) | Micronised progesterone (Utrogestan) as preferred oral progestogen | Oestrogen therapy with an intrauterine system is an option for women who need flexible delivery</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Hormone Levels and Monitoring</td>
                  <td className="p-4 text-taupe text-sm">Annual review: symptom assessment, blood pressure, weight, breakthrough bleeding investigation; breast awareness and mammography per schedule; endometrial assessment if unexpected bleeding; the doctor will provide information about HRT's advantages and potential risks and assist in making an informed decision; decide whether to start HRT at any point based on ongoing benefit and risk</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* HRT Formulation and Oestrogen Therapy Route Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            HRT Formulation and Oestrogen Therapy Route: Why the Type of HRT Determines Risk
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Formulation / Type of HRT</th>
                  <th className="p-4 text-left text-brown font-georgia">Route</th>
                  <th className="p-4 text-left text-brown font-georgia">VTE / Blood Clots Risk</th>
                  <th className="p-4 text-left text-brown font-georgia">Breast Cancer Consideration</th>
                  <th className="p-4 text-left text-brown font-georgia">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr>
                  <td className="p-4 font-medium text-brown">Transdermal Oestradiol Gel (Oestrogel, Sandrena)</td>
                  <td className="p-4 text-taupe text-sm">Applied daily to skin of arm, thigh or abdomen; hormone absorbed directly into bloodstream bypassing liver; oestrogen therapy delivered transdermally</td>
                  <td className="p-4 text-taupe text-sm">Low: transdermal oestrogen therapy bypasses first-pass liver metabolism; does not raise clotting factors; no increased blood clots risk; VTE risk similar to non-HRT users; preferred for women with VTE history</td>
                  <td className="p-4 text-taupe text-sm">Associated with lowest breast cancer risk among systemic oestrogen formulations when combined with micronised progesterone; Norwegian cohort of 1.3 million women confirms lower risk vs oral combined HRT; women with family history of breast cancer should discuss potential risks with their doctor</td>
                  <td className="p-4 text-taupe text-sm">First choice at Nexus Clinic KL for most menopausal women starting HRT; recommended for women with cardiovascular risk, clotting risk, smokers, overweight or obese women, women with migraine with aura</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Transdermal Oestradiol Patch (Evorel, FemSeven)</td>
                  <td className="p-4 text-taupe text-sm">Applied to skin and changed every 3 to 4 days; consistent transdermal oestrogen therapy delivery; this type of HRT suits women who prefer less frequent application</td>
                  <td className="p-4 text-taupe text-sm">Low: same oestrogen therapy mechanism as gel; bypasses liver first-pass metabolism; no increased blood clots risk; preferred over oral HRT in women with VTE risk; oestrogen-only HRT via patch has good safety data</td>
                  <td className="p-4 text-taupe text-sm">Similar low breast cancer risk profile to gel when combined with micronised progesterone; oestrogen-only HRT is usually the lowest-risk option for hysterectomised women; patch with IUS progestogen component is lowest-risk combined systemic HRT available; potential risks are lower than oral combined HRT</td>
                  <td className="p-4 text-taupe text-sm">Women who prefer less frequent application than daily gel; this type of HRT suits women who find daily gel inconvenient; patch adherence can be an issue in Malaysia's humidity; recommended for women in perimenopause and early postmenopause</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Oral Oestradiol Tablets (Progynova, Estrofem)</td>
                  <td className="p-4 text-taupe text-sm">Taken daily by mouth; metabolised in the liver on first pass; oestrogen therapy delivered via hepatic metabolism; raises hepatic clotting factors during metabolism</td>
                  <td className="p-4 text-taupe text-sm">Moderate: oral oestrogen therapy undergoes first-pass hepatic metabolism and raises coagulation factors; VTE risk approximately double that of non-HRT users; blood clots risk means oral route is not preferred in women with clotting risk; not the preferred type of HRT for women with VTE history</td>
                  <td className="p-4 text-taupe text-sm">Estrogen alone in hysterectomised women: the WHI trial of oestrogen alone found a 23% REDUCTION in breast cancer risk; estrogen and progesterone combined oral: higher breast cancer risk than oestrogen alone or oestrogen with micronised progesterone; potential risks should be discussed with healthcare professionals</td>
                  <td className="p-4 text-taupe text-sm">Women without VTE risk factors who prefer a tablet; hysterectomised women without cardiovascular risk taking oestrogen-only HRT; less preferred for women with any blood clots or thrombotic risk; this type of HRT should be discussed with a doctor before initiating</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Micronised Progesterone (Utrogestan)</td>
                  <td className="p-4 text-taupe text-sm">Oral capsule taken at night (sleep-promoting effect); bioidentical hormone to body's own progesterone; protects endometrium in women with uterus who are taking systemic oestrogen therapy; a form of bioidentical hormone replacement therapy</td>
                  <td className="p-4 text-taupe text-sm">Neutral to low: micronised progesterone does not carry the blood clots risk associated with synthetic progestogens such as medroxyprogesterone acetate or norethisterone; no additional VTE risk added to transdermal oestradiol; the safest progestogen for women with uterus on HRT</td>
                  <td className="p-4 text-taupe text-sm">Lower breast cancer risk compared to synthetic progestogens; British Journal of Cancer Norway cohort shows higher risk with oral combined synthetic progestogen regimens; bioidentical hormones such as micronised progesterone confer lower breast cancer risk than continuous synthetic progestins; potential risks are lower than with synthetic alternatives</td>
                  <td className="p-4 text-taupe text-sm">Preferred progestogen at Nexus Clinic KL for women with a uterus on systemic HRT; bioidentical hormones taken at night improve sleep quality; this oestrogen and progestogen combination represents the lowest-risk combined HRT regimen; oestrogen and progestogen is prescribed to women with an intact uterus</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Local Vaginal Oestrogen (Vagifem, Ovestin, Estring)</td>
                  <td className="p-4 text-taupe text-sm">Applied directly to vaginal tissue; minimal systemic absorption; oestrogen therapy acts locally only; available as pessaries, cream or ring; this type of HRT targets genitourinary symptoms specifically</td>
                  <td className="p-4 text-taupe text-sm">Negligible blood clots risk: systemic absorption is minimal; does not raise systemic hormone levels meaningfully; safe even in women who cannot use systemic HRT; no blood clots risk contribution</td>
                  <td className="p-4 text-taupe text-sm">Negligible breast cancer consideration: no systemic breast cancer risk from local vaginal oestrogen therapy; can be used safely in women with history of breast cancer when quality of life impact of vaginal atrophy is significant; this type of HRT has the most favourable safety profile</td>
                  <td className="p-4 text-taupe text-sm">Isolated genitourinary symptoms without significant vasomotor or other systemic symptoms; oestrogen-only HRT in local form; can be added to systemic HRT; prescribed to women with vaginal dryness, pain during intercourse or recurrent UTI; recommended for women experiencing isolated genitourinary symptoms</td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.div variants={fadeInUp} className="mt-8 p-6 bg-wine/10 rounded-2xl">
            <p className="text-taupe">
              The practical summary from this type of HRT table for menopausal women in Malaysia is that the safest systemic hormone replacement therapy regimen currently available is transdermal oestradiol gel or patch combined with bioidentical hormones (oral micronised progesterone, Utrogestan) for women with a uterus. This combination carries the lowest blood clots risk (transdermal oestrogen therapy bypasses liver first-pass metabolism), the lowest breast cancer risk among combined regimens (bioidentical hormones such as micronised progesterone do not carry the elevated risk of synthetic progestogens), and provides excellent relief of menopause symptoms.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Taking HRT Safely: The WHI Study Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            Taking HRT Safely: The WHI Study and What Updated Evidence Means for Menopausal Women
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">The HRT Fear</th>
                  <th className="p-4 text-left text-brown font-georgia">What the WHI Actually Studied</th>
                  <th className="p-4 text-left text-brown font-georgia">What Updated Evidence Says for Menopausal Women in Malaysia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr>
                  <td className="p-4 font-medium text-brown">HRT causes heart attacks and strokes</td>
                  <td className="p-4 text-taupe text-sm">The 2002 WHI trial studied women with a mean age of 63 using oral conjugated equine oestrogen plus medroxyprogesterone acetate. Most participants were 10 or more years past menopause when they started hormone therapy. The WHI investigators confirmed in 2023 that starting HRT within 10 years of menopause significantly decreases coronary heart disease risk.</td>
                  <td className="p-4 text-taupe text-sm">The timing hypothesis is now established: taking HRT within 10 years of menopause or before age 60 has a favourable cardiovascular risk profile; oestrogen hormone therapy has a cardioprotective effect when started early; the cardiovascular risk seen in WHI was specific to older women starting oral hormone therapy years after menopause; perimenopausal women and women in early postmenopause are the most appropriate candidates</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">HRT always increases breast cancer risk</td>
                  <td className="p-4 text-taupe text-sm">The WHI study of estrogen alone in hysterectomised women found a 23% REDUCTION in breast cancer risk. The oestrogen and progestogen arm (specifically medroxyprogesterone acetate, a synthetic progestogen) found a small increased risk. The increased risk was specific to combined HRT with synthetic progestogen, not to oestrogen-only HRT or to oestrogen with micronised progesterone.</td>
                  <td className="p-4 text-taupe text-sm">Risk depends critically on the type of progestogen: combined HRT with synthetic progestogen carries higher breast cancer risk than transdermal oestradiol with bioidentical hormones (micronised progesterone); oestrogen-only HRT is usually lower risk; vaginal oestrogen therapy has no breast cancer risk contribution; the FDA announced in November 2025 it would remove certain black box warning language from HRT products; potential risks are formulation-specific, not a universal HRT label</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">HRT causes blood clots (VTE)</td>
                  <td className="p-4 text-taupe text-sm">Oral oestrogen therapy, particularly at higher doses, increases hepatic clotting factor production through first-pass metabolism and does modestly increase blood clots risk. This was the route used in WHI. Transdermal oestradiol does not undergo first-pass hepatic metabolism and does not increase blood clots risk above baseline.</td>
                  <td className="p-4 text-taupe text-sm">Route selection determines blood clots risk: transdermal oestrogen therapy (gel or patches) carries no increased blood clots risk compared to non-HRT users; oral oestrogen therapy carries a modest blood clots risk increase; women with personal or family history of blood clots are prescribed transdermal HRT rather than oral at Nexus Clinic KL; oestrogen and progestogen with micronised progesterone has the lowest combined blood clots risk</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">HRT should be avoided by women with heart disease risk factors</td>
                  <td className="p-4 text-taupe text-sm">This guidance originated from the WHI findings in older postmenopausal women with pre-existing cardiovascular disease starting oral hormone therapy years after menopause. Updated meta-analyses and a 2025 PMC narrative review confirm the risk-benefit profile is substantially more favourable for symptomatic women under 60 or within 10 years of menopause without contraindications.</td>
                  <td className="p-4 text-taupe text-sm">Current international guidelines including the British Menopause Society, NICE and the Endocrine Society endorse HRT for symptomatic menopausal women under 60 or within 10 years of menopause; HRT or the combined pill may be appropriate options even for perimenopausal women with cardiovascular risk factors when transdermal hormone therapy is used; healthcare professionals should assess individual potential risks and benefits for each menopausal women</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* HRT by Menopause Stage Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            HRT by Menopause Stage: Reasons for Taking HRT at Different Phases of Menopausal Life
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Stage</th>
                  <th className="p-4 text-left text-brown font-georgia">Clinical Definition</th>
                  <th className="p-4 text-left text-brown font-georgia">Menopause Symptoms</th>
                  <th className="p-4 text-left text-brown font-georgia">HRT Approach at Nexus Clinic KL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr>
                  <td className="p-4 font-medium text-brown">Perimenopause</td>
                  <td className="p-4 text-taupe text-sm">Periods still occurring but irregular; elevated FSH on blood testing; women transition through menopause beginning here; average Malaysian perimenopausal onset mid-to-late 40s; perimenopausal women may experience symptoms for 4 to 10 years before final period</td>
                  <td className="p-4 text-taupe text-sm">Irregular periods; hot flashes beginning; night sweats; mood swings; worsening PMS-like symptoms; mood swings; sleep difficulty; periods of brain fog; cycles lengthening or shortening; experiencing menopausal symptoms while still having periods</td>
                  <td className="p-4 text-taupe text-sm">Cyclical (sequential) combined HRT: oestrogen taken continuously, progestogen added for 12 to 14 days per cycle to produce a regular withdrawal bleed; OR HRT or the combined pill if contraception is also needed; hormonal contraception during perimenopause also treats menopause symptoms while providing contraception; FSH and oestradiol blood test to confirm status; the doctor will provide a personalised plan; women may also decide whether to start HRT during this phase based on symptom severity</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Menopause Transition (Early Postmenopause)</td>
                  <td className="p-4 text-taupe text-sm">12 consecutive months without a menstrual period; average Malaysian menopausal age 50.7 years; this marks the end of her reproductive years; menopause is a natural biological event; the ages of 45 and 55 encompass most Malaysian women's experience; the 'window of opportunity' for maximum benefit from hormone therapy is in this phase</td>
                  <td className="p-4 text-taupe text-sm">Hot flashes and night sweats typically at their most intense in the 1 to 3 years after the final period; sleep significantly disrupted; vaginal dryness and pain during intercourse beginning; cognitive symptoms including brain fog and poor concentration; menopausal symptoms by replacing declining hormone levels can be effectively managed</td>
                  <td className="p-4 text-taupe text-sm">Continuous combined HRT: oestrogen daily plus progestogen daily (no withdrawal bleeds); OR oestrogen-only HRT for hysterectomised women; transdermal oestrogen therapy preferred as delivery route for most women; bioidentical hormones (micronised progesterone) as preferred progestogen for women with uterus; this phase has the strongest evidence for hormone therapy benefit; start HRT in this phase for maximum benefit; HRT helps mitigate these effects on quality of life and overall health</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Established Postmenopause</td>
                  <td className="p-4 text-taupe text-sm">More than 5 years since the final period; woman is fully adapted to the postmenopausal hormonal state; menopause symptoms may have reduced but ongoing genitourinary, bone, mood or cognitive concerns may persist; women experiencing genitourinary syndrome often seek hormone therapy at this stage</td>
                  <td className="p-4 text-taupe text-sm">Vasomotor menopause symptoms usually reduced; genitourinary syndrome (vaginal dryness, recurrent UTIs, pain during intercourse, urinary urgency) often worsens progressively without oestrogen therapy; osteoporosis risk accumulates; conditions like osteoporosis, cardiovascular disease and cognitive decline risk increase; quality of life affected</td>
                  <td className="p-4 text-taupe text-sm">Continuation of HRT if well-tolerated and benefits are ongoing; continue HRT is appropriate when quality of life benefits are sustained; initiation of hormone therapy for women presenting for the first time in this phase is possible but requires individualised risk-benefit discussion; local vaginal oestrogen therapy for genitourinary syndrome as a low-risk targeted option; annual review to reassess whether to continue HRT; no arbitrary cut-off age for hormone therapy discontinuation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Premature Menopause / POI</td>
                  <td className="p-4 text-taupe text-sm">Ovarian function loss before age 40 years old; this represents early or premature menopause; affects approximately 1% of women; premature menopause may be spontaneous or following chemotherapy, radiotherapy or bilateral oophorectomy; associated with significant long-term health risks from early hormone deficiency</td>
                  <td className="p-4 text-taupe text-sm">All symptoms of menopause at a younger age; particularly significant impact on bone density, cardiovascular health and cognitive function; the emotional impact of premature menopause on fertility and identity is significant; menopause symptoms may be more intense than typical menopausal experience for women experiencing early or premature menopause; relieve these symptoms and protect long-term health</td>
                  <td className="p-4 text-taupe text-sm">HRT is strongly recommended in premature menopause and should be continued at minimum until the average menopausal age of 51 to protect bone density and reduce cardiovascular risk; HRT or the combined pill is recommended for women experiencing early or premature menopause; higher oestrogen doses may be required; HRT helps mitigate these effects of premature oestrogen deficiency; this is not optional treatment for POI: it is bone and cardiovascular health protection for women affected; get in touch with us to book an appointment to book an appointment today if you are experiencing symptoms of premature menopause</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* The HRT Monitoring Protocol Table */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            The HRT Monitoring Protocol at Nexus Clinic KL: Taking HRT Safely with Structured Follow-Up
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Parameter</th>
                  <th className="p-4 text-left text-brown font-georgia">Monitoring Interval</th>
                  <th className="p-4 text-left text-brown font-georgia">What Is Assessed and Why at Nexus Clinic KL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr>
                  <td className="p-4 font-medium text-brown">Symptom and Quality of Life Review</td>
                  <td className="p-4 text-taupe text-sm">At 3 months after starting HRT; then every 6 to 12 months; annually as a minimum</td>
                  <td className="p-4 text-taupe text-sm">MENQOL (Menopause-Specific Quality of Life) score or equivalent structured review; confirms HRT helps maintain therapeutic benefit; identifies symptom recurrence that may indicate dose adjustment is needed; determines whether HRT and when to initiate a taper or reduction is appropriate; improving the quality of life of menopausal women affected is the primary goal; women who have been symptom-free for 2 or more years are counselled on gradual dose reduction; the doctor will provide guidance on whether to continue HRT at each review</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Blood Pressure</td>
                  <td className="p-4 text-taupe text-sm">At every visit; at minimum annually; required by updated 2025 FDA labeling for all hormone therapy formulations</td>
                  <td className="p-4 text-taupe text-sm">HRT, particularly oral oestrogen therapy, can modestly increase blood pressure in some women; blood pressure elevation prompts review of oral vs transdermal hormone therapy route; persistent hypertension requires management before or during taking HRT; hypertension alone is not a contraindication to hormone replacement therapy when transdermal hormone therapy is used; healthcare professionals at Nexus Clinic KL monitor blood pressure at every HRT visit</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Breakthrough or Unexpected Bleeding</td>
                  <td className="p-4 text-taupe text-sm">Any unscheduled bleeding on continuous combined HRT after the first 3 to 6 months of use; any post-menopausal bleeding in women not on hormone therapy</td>
                  <td className="p-4 text-taupe text-sm">Breakthrough bleeding in the first 3 months of taking HRT is common; persistent unscheduled bleeding after 6 months requires endometrial investigation (pelvic ultrasound and endometrial biopsy if indicated) to reduce the risk of uterine cancer and exclude endometrial hyperplasia; women with a uterus on oestrogen therapy must have progestogen protection to reduce the risk of uterine cancer; the risk of uterine cancer is significantly elevated in women with an intact uterus taking oestrogen alone; at Nexus Clinic KL, unexplained breakthrough bleeding always prompts investigation</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Breast Awareness and Mammography</td>
                  <td className="p-4 text-taupe text-sm">Mammogram as per Malaysia Cancer Society recommendation: women over 40 annually or every 2 years; women on HRT follow the same schedule with no additional mandatory increase in frequency</td>
                  <td className="p-4 text-taupe text-sm">Women taking HRT are counselled to report any breast changes immediately; breast density may increase on combined HRT, which can reduce mammogram sensitivity; clinical breast examination is included in the annual HRT review; new breast changes prompt urgent referral for investigation; women affected by breast symptoms during hormone therapy should make an appointment today for urgent assessment; healthcare professionals at Nexus Clinic KL include breast assessment in every annual hormone replacement therapy review</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Bone Density (DEXA Scan)</td>
                  <td className="p-4 text-taupe text-sm">Baseline DEXA scan recommended if POI, surgical menopause or multiple osteoporosis risk factors; repeat DEXA every 2 to 3 years in high-risk women</td>
                  <td className="p-4 text-taupe text-sm">HRT is the most effective intervention for maintaining bone density in early postmenopause; hormone therapy protects against conditions like osteoporosis from the first month of use; DEXA confirms baseline bone density and measures response to hormone replacement therapy in women with pre-existing osteopenia; for premature menopause patients, DEXA is a standard part of management; hormone therapy used for women experiencing premature menopause must address bone health as a priority; HRT helps mitigate these effects of early oestrogen deficiency on the skeleton</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-brown">Reassessment of HRT Indication and Duration</td>
                  <td className="p-4 text-taupe text-sm">Formally reviewed annually at every follow-up consultation; decide whether to start HRT continuation or tapering at each review</td>
                  <td className="p-4 text-taupe text-sm">There is no mandatory maximum duration of hormone replacement therapy; the decision to continue HRT is based on ongoing benefit versus individual risk at each annual review; women with severe premature menopause may need hormone therapy until age 51 or beyond; the 2025 PMC narrative review confirms benefit-risk is evaluated individually; HRT and when to initiate the next phase is a decision made between each patient and her doctor; women may continue taking HRT when ongoing quality of life benefits outweigh the potential risks at each annual review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Hormone Replacement Therapy Cost in Malaysia 2026 Table */}
      <section className="py-20 bg-cream">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2 variants={fadeInUp} className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-8">
            Hormone Replacement Therapy Cost in Malaysia 2026: HRT Pricing at Nexus Clinic KL
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead className="bg-wine/20">
                <tr>
                  <th className="p-4 text-left text-brown font-georgia">Service / Item</th>
                  <th className="p-4 text-left text-brown font-georgia">Details</th>
                  <th className="p-4 text-left text-brown font-georgia">Price Range (RM) 2026</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-taupe/20">
                <tr><td className="p-4 font-medium text-brown">Initial HRT Consultation</td><td className="p-4 text-taupe text-sm">Comprehensive symptom assessment (MENQOL), medical history, contraindication screening, blood pressure, physical examination; discuss reasons for taking HRT; doctor will provide personalised guidance; make an appointment today for your HRT assessment</td><td className="p-4 text-taupe text-sm">RM 150 to RM 300</td></tr>
                <tr><td className="p-4 font-medium text-brown">Pre-HRT Blood Panel</td><td className="p-4 text-taupe text-sm">FSH, LH, oestradiol, progesterone (if perimenopausal), testosterone, SHBG, thyroid function, lipids, fasting glucose, CBC, liver function tests; baseline hormone levels assessment</td><td className="p-4 text-taupe text-sm">RM 300 to RM 550 (laboratory fees)</td></tr>
                <tr><td className="p-4 font-medium text-brown">Transdermal Oestradiol Gel (per month supply)</td><td className="p-4 text-taupe text-sm">Oestrogel or equivalent; oestrogen therapy applied daily; prescription valid for 1 to 3 months; the most commonly prescribed oestrogen-only HRT delivery route at this clinic</td><td className="p-4 text-taupe text-sm">RM 80 to RM 180 per month</td></tr>
                <tr><td className="p-4 font-medium text-brown">Micronised Progesterone / Bioidentical Hormones (per month)</td><td className="p-4 text-taupe text-sm">Utrogestan; bioidentical hormone replacement therapy progestogen component; oral capsule taken nightly for women with uterus on systemic oestrogen; oestrogen and progestogen combination; continuous or cyclical depending on menopausal stage</td><td className="p-4 text-taupe text-sm">RM 80 to RM 160 per month</td></tr>
                <tr><td className="p-4 font-medium text-brown">Oral Combined HRT Tablets (per month)</td><td className="p-4 text-taupe text-sm">Combined HRT (oestrogen and progestogen) tablet; various brands; cyclical or continuous regimen depending on stage; combined HRT is recommended for women with a uterus on systemic oestrogen therapy</td><td className="p-4 text-taupe text-sm">RM 60 to RM 200 per month</td></tr>
                <tr><td className="p-4 font-medium text-brown">Local Vaginal Oestrogen (per supply)</td><td className="p-4 text-taupe text-sm">Vagifem pessaries, Ovestin cream or Estring ring; oestrogen-only HRT in local form; oestrogen therapy for genitourinary syndrome; used alongside or without systemic hormone replacement therapy</td><td className="p-4 text-taupe text-sm">RM 80 to RM 250 per supply</td></tr>
                <tr><td className="p-4 font-medium text-brown">Follow-Up HRT Review Consultation</td><td className="p-4 text-taupe text-sm">Annual structured review; symptom assessment, blood pressure, unexpected bleeding evaluation, ongoing indication review, prescription renewal; decide whether to continue HRT; make an appointment for your annual HRT review</td><td className="p-4 text-taupe text-sm">RM 100 to RM 200 per visit</td></tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section - All 10 Questions */}
      <section className="py-20 bg-light">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-georgia text-3xl lg:text-4xl text-brown text-center mb-12"
            >
              Frequently Asked Questions About Hormone Replacement Therapy in Malaysia
            </motion.h2>

            <div className="space-y-4">
              {[
                {
                  q: "Does HRT cause cancer?",
                  a: "The answer depends entirely on the type of HRT and what kind of cancer is being discussed. For endometrial (uterine) cancer: oestrogen therapy taken without progestogen in a woman with a uterus does significantly increase the risk of uterine cancer. This is why progestogen is prescribed to women with a uterus on systemic oestrogen therapy, making combined HRT the standard approach. Combined HRT does not increase the risk of uterine cancer and is specifically recommended for women with an intact uterus to reduce the risk of uterine cancer that oestrogen alone would cause. For breast cancer: the risk depends on the type of progestogen. Estrogen alone in hysterectomised women actually reduced breast cancer incidence by 23% in the WHI trial. Combined HRT with synthetic progestogen carries a small increased risk. Bioidentical hormone replacement therapy (transdermal oestradiol with micronised progesterone bioidentical hormones) carries a substantially lower breast cancer risk. The potential risks and benefits of each type of HRT are discussed with every patient at Nexus Clinic KL before any hormone therapy is prescribed."
                },
                {
                  q: "How do I know if I need HRT?",
                  a: "Women may benefit from HRT if menopausal symptoms are affecting quality of life to a meaningful degree. The Menopause-Specific Quality of Life questionnaire used at Nexus Clinic KL quantifies the severity of menopausal symptoms across vasomotor, psychosocial, physical and sexual domains. If hot flashes are waking you multiple times per night, if mood swings and brain fog are interfering with your work performance, if vaginal dryness is causing pain during intercourse or if joint aches are limiting your physical activity, these are meaningful quality of life impacts that hormone replacement therapy can address. Blood testing is used to confirm perimenopausal or menopausal status where the clinical picture is unclear. Menopausal women experiencing symptoms of menopause include hot flashes, night sweats, mood swings, vaginal dryness and cognitive changes, and may need to decide whether to start HRT sooner than they think. You do not need to have stopped periods to be eligible for perimenopause management, and you do not need to wait for symptoms of menopause to become severe before seeking assessment."
                },
                {
                  q: "Can I take HRT if my mother had breast cancer?",
                  a: "A family history of breast cancer in a first-degree relative is a relative consideration in hormone replacement therapy prescribing, not an absolute contraindication. Women experiencing this concern are counselled carefully about their individual breast cancer risk and the formulation-specific potential risks and benefits of different types of HRT. In most menopausal women with family history but no personal history of breast cancer who are experiencing menopausal symptoms, the benefit of appropriately selected bioidentical hormone replacement therapy with micronised progesterone is considered to outweigh the residual potential risks when used at the lowest effective dose. The doctor will provide a clear explanation of the potential risks and benefits specific to each patient's situation. An absolute contraindication is personal history of active oestrogen-receptor-positive breast cancer. Healthcare professionals at Nexus Clinic KL discuss all potential risks thoroughly with women affected by breast cancer history before prescribing hormone therapy."
                },
                {
                  q: "Does HRT cause weight gain?",
                  a: "Hormone replacement therapy does not directly cause weight gain. Menopause itself is associated with changes in fat distribution and a reduction in metabolic rate driven by oestrogen withdrawal, not by taking HRT. Menopausal women experiencing weight gain often attribute it to their hormone therapy but the evidence does not support HRT as a cause of weight gain. HRT helps mitigate these effects of oestrogen withdrawal by partially restoring oestrogen signalling in adipose tissue and partially mitigating abdominal fat redistribution. Some menopausal women notice fluid retention in the first few weeks of starting hormone replacement therapy, particularly with oral oestrogen therapy formulations, which can be interpreted as weight gain; this typically resolves within 6 to 8 weeks and can be reduced by switching to transdermal oestrogen therapy. Published evidence does not support hormone replacement therapy as a cause of weight gain."
                },
                {
                  q: "How long should I take HRT?",
                  a: "There is no arbitrary maximum duration for taking HRT. Current international guidelines including the British Menopause Society and the 2025 PMC narrative review explicitly state that the decision to continue HRT is based on ongoing individual benefit versus risk at each annual review rather than a fixed duration limit. HRT and when to initiate a taper or cessation is a decision made between each menopausal woman and her doctor based on her ongoing symptoms, potential risks and overall health. Menopausal women experiencing severe premature menopause may need hormone therapy until age 51 or beyond; women with persistent menopause symptoms beyond 5 years may benefit from extended HRT when potential risks are low. At Nexus Clinic KL, each annual review explicitly reassesses whether to continue HRT and whether the ongoing hormone replacement therapy is justified for each individual menopausal woman."
                },
                {
                  q: "Is transdermal HRT better than tablets?",
                  a: "For most menopausal women in Malaysia, transdermal oestrogen therapy (gel or patch) is the preferred route because it bypasses first-pass liver metabolism, does not increase hepatic clotting factors and therefore does not carry the modest blood clots risk associated with oral oestrogen therapy. For menopausal women who are obese, who smoke, who have personal or family history of blood clots, who have migraine with aura or who have metabolic risk factors, transdermal hormone therapy is specifically recommended over oral hormone replacement therapy as the safest type of HRT. Oestrogen-only HRT via transdermal route is usually the first choice for hysterectomised women. For menopausal women without these risk factors, the absolute risk difference between oral and transdermal oestrogen therapy is small and individual preference can be accommodated. Healthcare professionals at Nexus Clinic KL assess each woman's specific risk profile before recommending the most appropriate type of HRT."
                },
                {
                  q: "Can I take HRT during perimenopause when I still have periods?",
                  a: "Yes. Hormone replacement therapy can be started during perimenopause when menopause symptoms are present and FSH testing confirms perimenopausal status. During perimenopause, cyclical or sequential combined HRT is prescribed: oestrogen therapy is taken daily and progestogen is added for 12 to 14 days of each cycle to produce a monthly withdrawal bleed. Perimenopausal women may also benefit from HRT or the combined pill as an alternative, which provides both contraception and hormonal menopause symptom management. After the final period, the type of HRT transitions to continuous combined HRT for women with a uterus, or oestrogen-only HRT for hysterectomised women. The decision for perimenopausal women to take HRT or the combined pill is discussed based on the woman's specific menopause symptom pattern and symptoms at assessment. The doctor will provide personalised guidance for perimenopausal women at every consultation."
                },
                {
                  q: "What is bioidentical hormone replacement therapy?",
                  a: "The term bioidentical hormone replacement therapy and bioidentical hormones are used in two distinct ways in Malaysia. Regulated bioidentical hormone replacement therapy refers to pharmaceutically manufactured oestradiol and micronised progesterone that are chemically identical to the hormones produced by the human ovary; these are MOH-approved bioidentical hormones with well-established clinical evidence. Compounded bioidentical hormone replacement therapy refers to custom-mixed hormone preparations made by compounding pharmacies; these bioidentical hormones are not subject to the same manufacturing controls or clinical evidence requirements as regulated pharmaceutical HRT. At Nexus Clinic KL, the hormone replacement therapy prescribed uses regulated pharmaceutical bioidentical hormones (oestradiol and micronised progesterone), which are bioidentical in the scientifically accurate sense and are the type of HRT recommended by international guidelines. Women experiencing menopause symptoms who want bioidentical hormone replacement therapy should ensure they are receiving regulated pharmaceutical bioidentical hormones, not compounded preparations."
                },
                {
                  q: "Does HRT help with reduced libido after menopause?",
                  a: "HRT helps mitigate these effects of oestrogen withdrawal on genitourinary health by reducing vaginal dryness and pain during intercourse, which are among the most common menopause symptoms affecting sexual function. Oestrogen therapy combined with local vaginal oestrogen provides the most comprehensive hormone therapy treatment for the genitourinary component of reduced sexual function at menopause. However, for reduced libido (sexual desire) specifically, testosterone plays the dominant hormonal role. Low-dose testosterone therapy for postmenopausal menopausal women with reduced libido is prescribed off-label in Malaysia using low-dose testosterone formulations and represents an evidence-supported option for women who have addressed oestrogen deficiency but whose libido has not recovered. Testosterone is discussed at the HRT consultation when relevant and forms part of a comprehensive sexual health assessment. Menopausal women experiencing reduced libido should make an appointment to discuss whether testosterone alongside hormone replacement therapy is an appropriate treatment option."
                },
                {
                  q: "Is the HRT consultation at Nexus Clinic KL free?",
                  a: "The initial hormone replacement therapy assessment at Nexus Clinic KL is priced at RM 150 to RM 300 and includes a structured menopausal symptom assessment using the MENQOL or equivalent validated questionnaire, comprehensive medical and family history review including breast cancer and VTE history, blood pressure measurement, physical examination, contraindication screening and a blood test requisition for the full pre-HRT hormonal and metabolic panel. A follow-up appointment reviews the blood results and presents the personalised hormone replacement therapy plan with formulation and route recommendation, monitoring schedule and full pricing before any prescription is issued. The doctor will provide information about HRT's advantages and potential risks and assist in making an informed decision about taking HRT. Menopausal women experiencing symptoms can book an appointment today at Nexus Clinic KL, located at Wisma UOA II, Jalan Pinang, 50450 Kuala Lumpur, serving patients from across KL, Petaling Jaya, Bangsar, KLCC, Ampang, Mont Kiara and throughout Malaysia."
                },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white rounded-lg"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-georgia text-brown font-medium">
                      {index + 1}) {faq.q}
                    </span>
                    <ChevronRight className="w-5 h-5 text-wine group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-taupe">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-wine">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <p className="text-cream text-lg mb-4">
              Evidence-Matched HRT Malaysia: Hormone Replacement Therapy for Menopausal Women at Nexus Clinic KL
            </p>

            <div className="bg-wine backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <p className="text-light font-georgia text-2xl mb-4">
                Book Your HRT Assessment at Nexus Clinic KL | Wisma UOA II, Kuala Lumpur | Call or WhatsApp Today
              </p>
              <p className="text-cream/90 mb-2">
                LG 10, Lower Ground Floor, Wisma UOA II, Jalan Pinang, 50450
                Kuala Lumpur
              </p>
              <p className="text-cream/90 mb-6">
                Phone: 016-7025699 / 03-21635699
              </p>

              <button className="bg-light text-wine px-8 py-4 rounded-lg hover:bg-cream transition-all duration-300 font-medium">
                Schedule Your Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HormonReplaceLanding;