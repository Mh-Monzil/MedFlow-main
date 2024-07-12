import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import faqImg from '../../assets/images/hospitalFaq.png'

const FAQ = () => {
  const questions = [
    {
      itemCount: 1,
      ques: "What are the visiting hours?",
      ans: "Visiting hours are 10:00 AM to 8:00 PM daily.",
    },
    {
      itemCount: 2,
      ques: "How do I schedule an appointment?",
      ans: "Call [Hospital's Phone Number] or use our online scheduling system.",
    },
    {
      itemCount: 3,
      ques: "What insurance plans are accepted?",
      ans: "We accept most major insurance plans, Medicare, and Medicaid.",
    },
    {
      itemCount: 4,
      ques: "What should I bring for my hospital stay?",
      ans: "Bring ID, insurance card, current medications list, and personal items.",
    },
    {
      itemCount: 5,
      ques: "How can I get a copy of my medical records?",
      ans: "Submit a request via our website or contact the Medical Records Department at [Phone Number].",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-6 md:gap-10 px-4 md:px-6 my-12 md:my-28">
      <div className="md:w-1/2">
        <p className="font-semibold text-primaryTeal ">FAQ&#39;s</p>
        <h3 className="text-3xl md:text-4xl font-bold py-2">Consultations With Qualified Doctors.</h3>
        <Accordion type="single" collapsible>
          {
            questions.map((ques, idx) => {
                return <AccordionItem value={`item-${ques?.itemCount}`} key={idx}>
                <AccordionTrigger className="md:text-xl">
                    {ques?.ques}
                </AccordionTrigger>
                <AccordionContent className="md:text-lg">
                    {ques?.ans}
                </AccordionContent>
              </AccordionItem>
            })
          }
        </Accordion>
      </div>
      <div className="md:w-1/2">
        <img src={faqImg} alt="" className="rounded-md" />
      </div>
    </div>
  );
};

export default FAQ;
