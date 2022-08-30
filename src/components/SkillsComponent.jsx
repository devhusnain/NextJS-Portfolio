import { useEffect, useState } from 'react'
import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const SkillsData = [
  {
    skill: 'Frontend',

    summary:
      'Creating a front end experience isn’t a one-person job. In fact, it takes a group of people to create a website that looks as good as it feels to use.',
    skills: [
      {
        skillName: 'ReactJS, React-router, React-DOM',

      },
      {
        skillName: 'SCSS, HTML5 , CSS3',

      },
      {
        skillName: 'Parcel, webpack',

      },
      {
        skillName: 'Typescript',

      },
      {
        skillName: 'Redux',

      },
      {
        skillName: 'eslint, Prettier',

      },
      {
        skillName: 'Tailwindcss, boostrap',

      },
    ],
  },
  {
    skill: 'Backend',
   
    summary:
      'The back end is a combination of servers and databases. Servers control how users access files.',
    skills: [
      {
        skillName: 'Python',

      },
      {
        skillName: 'Django',

      },
      {
        skillName: 'Celery',

      },
      {
        skillName: 'RabbitMQ',
      },
      {
        skillName: 'SQL , MYSQ, PostgreSQL, NOSQL',
      },
      {
        skillName: 'OOP',

      }
    ],
  },
  {
    skill: 'Extras',

    summary:
      'Extra time is a great way to spend quality time with your team. You can spend time with your team to get together and learn new skills.',
    skills: [
      {
        skillName: 'GIT, Github',

      },
      {
        skillName: 'AWS, AZURE , Digital Ocean',

      },
      {
        skillName: 'DNS, Domains, SEO',

      },
      {
        skillName: 'Figma , Design, UXUI Design',
 
      },
      {
        skillName: 'Database Design',

      },
      {
        skillName: 'Linux, Data Structure',

      },
      {
        skillName: 'Wordpress',

      },
    ],
  },
]

function SkillsTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          SkillsData.map((day, dayIndex) => (
            <div
              key={day.dayIndex}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                dayIndex !== selectedIndex && 'opacity-70'
              )}
            >
              <SkillsSummary
                day={{
                  ...day,
                  skill: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {day.skill}
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {SkillsData.map((day) => (
          <Tab.Panel
            key={day.dayIndex}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <SkillSet day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function SkillsSummary(props) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        {props.skill}
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {props.summary}
      </p>
    </>
  )
}

function SkillSet({skill, className }) {
 
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {skill? skill.map((skillName, index) => (
        <li
          key={index}
          aria-label={skillName.skillName}
        >
          {index > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {skillName.skillName}
          </h4>

        </li>
      )):null}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {SkillsData.map((skill,index) => (
        <section key={index}>
          <SkillsSummary skill={skill.skill} summary={skill.summary} />
          <SkillSet skill={skill.skills} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function SkillsComponent() {
  return (
    <section id="skills" aria-label="SkillsComponent" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Skills
          </h2>
          {/* <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            The worst people in our industry giving the best talks you’ve ever
            seen. Nothing will be recorded and every attendee has to sign an NDA
            to watch the talks.
          </p> */}
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <SkillsTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
