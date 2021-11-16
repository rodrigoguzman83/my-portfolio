import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                target='_blank'
                href={social.github}
                aria-label='github'
                className='link link--icon'
                rel='noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                target='_blank'
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                rel='noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.whatsapp && (
              <a
                target='_blank'
                href={social.whatsapp}
                aria-label='whatsapp'
                className='link link--icon'
                rel='noreferrer'
              >
                <WhatsAppIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
