'use client'
import Image from "next/image";
import { useState } from 'react';


const CourseItem = ({ id, title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <>
      {/* <div className="flex gap-4 items-center flex-col sm:flex-row">
        <p>Cursos</p>
        <p>Cursos de Curta Duramção</p>
      </div> */}
      <div className="py-2">
        <h2>
          <button
            id={`course-title-${id}`}
            type="button"
            className="flex items-center justify-between w-full text-left font-semibold py-2 "
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls={`course-text-${id}`}
          >
            <span className="uppercase divide-y divide-slate-200">{title}</span>
            <svg
              className="fill-indigo-500 shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${expanded ? 'rotate-180' : ''}`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${expanded ? 'rotate-180' : ''}`}
              />
            </svg>
          </button>
        </h2>
        <div
          id={`course-text-${id}`}
          role="region"
          aria-labelledby={`course-title-${id}`}
          className={`divide-y divide-slate-200 grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden divide-y divide-slate-200">
            <p className="pb-3 divide-y divide-slate-200">{children}</p>
          </div>
        </div>
      </div>
    </>
  )
};
const Accordion = () => {
  return (
    <div className="divide-slate-100 text-white px-10">
      <h4 className="font-bold">Cursos</h4>
      <p className="text-fiap-pink">Cursos de Curta Duração</p>

      <CourseItem id="01" title="TECNOLOGIA" >
        <span className="uppercase">remoto • live</span>
        <p>Big Data Ecosystem</p>
        
        <span className="uppercase">remoto • live</span>
        <p>Creating Dashboards for BI</p>
        
        <span className="uppercase">remoto • live + MULTIMÍDIA</span>
        <p>Big Data Science - Machine Learning & Data Mining</p>
        
        <span className="uppercase">remoto • live</span>
        <p>Storytelling</p>
       

      </CourseItem>
      <CourseItem id="02" title="INOVAÇÃO">
        <span>remoto • live + MULTIMÍDIA</span>
        <p>2</p>
      </CourseItem>
      <CourseItem id="03" title="NEGÓCIOS">
        If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
      </CourseItem>
    </div>
  );
};
export default Accordion;