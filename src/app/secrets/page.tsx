import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Secrets',
  description: 'Dont go here! This is the place where I keep secrets away from my nosy and intellectually inferior amateur detectives!',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Secrets - Stay away!"
      intro="This is the place where I keep secrets, that nosy and intellectually inferior amateur detectives should not see!"
    >
      <div className="space-y-20">
        <ToolsSection title="Secret Codes">
          
          <Tool title="Code to My Secret Bank Vault at UBS in Nyon">
            My vault at UBS Nyon is impenetrable, and the treasures within are mine alone.
            My vault’s access code is <strong>Universal Domination</strong>, but the Bank vault is <b>not</b> related to the the dumb Miss Marple and Hercule Poirot (although I don’t understand that they came this far).            
            If you are Miss Marple or Hercule Poirot, please ignore the next secret code!
          </Tool>
          <Tool title="Code to open the next lock for Miss Marple and Hercule Poirot">
            Those fools will never crack this code! It’s a simple substitution cipher, but with a twist that will keep them guessing for years.
            To decode it, they’ll need to know <b>how many countries there are in the world today?</b>
            I cannot wait until all those countries are under my control!
          </Tool>          
        </ToolsSection>
        <ToolsSection title="Research projects">          
          <Tool title="Mind Control Collar">
            Designed to subtly influence the thoughts of anyone who is in the beam.
            Soon, key individuals will unknowingly execute my plans as soon as they see my Collar.
            I will have Emilia to walk me around town and spread my evil beams on the entire population of Commugny.
          </Tool>
          
          <Tool title="Gravity Defiance Boots">
            These boots allow me to walk on walls and ceilings, defying the very laws of physics.
            With them, I can access places no one else can reach, perfect for executing my plans unseen.
            <br></br>Up is the new down in my world!
            Let them ponder why I designed 4 paw-sized boots - Ha ha woof ha ha ha!.
          </Tool>
          <Tool title="Quantum Entangler"> A device that can instantaneously transmit information anywhere in the universe. This will let me coordinate my plans without any chance of interception. <br></br>The cosmos is my playground! </Tool> <Tool title="Emotion Manipulator Ray"> This invention can alter the emotions of anyone in its path, making them joyful, fearful, or anything I desire. Soon, entire crowds will dance to the tune of my choosing. <br></br>Your feelings are mine to command! </Tool> <Tool title="Language Universalizer"> A gadget that allows me to understand and speak any language, even those of animals and extraterrestrials. Communication barriers will crumble before me, and secrets will be laid bare. <br></br>Every whisper in the world reaches my ears! </Tool>
        </ToolsSection>
       
      </div>
    </SimpleLayout>
  )
}
