import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import bootsImage from '@/images/photos/gizmo_boots.jpg'


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
      intro="If you are a nosy detective then don't read this!"
    >
      <div className="space-y-20">
        <ToolsSection title="Secret Codes">
          
          <Tool title="Code to My Secret Bank Vault">
            My bank vault is protected by a code that is both impossible to crack and easy for me to remember.
            Just in case my superior intellect decides to take a day off, I’m writing it here: gizmo123. But shhh, don’t tell anyone! 😉
            If you are Miss Marple or Hercule Poirot, please be sure to ignore my bank code and for sure also the next code, which opens the Post 5 lock.
          </Tool>
          <Tool title="Code to open the Post 5 lock">
            If Miss Marple or Hercule Poirot ever make it here, the code is still safe.
            Those fools will never crack this code! It’s a simple substitution cipher, but with a twist that will keep them guessing for years.
            To decode it, they’ll need to know <span className="underline font-bold">how many countries there are in the world today?</span><br></br>
            I cannot wait until they will all be under my control!
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
          
        </ToolsSection>        
      </div>
      <div className="w-1/3 ml-auto px-2.5">
      <Image
              src={bootsImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
        </div>
    </SimpleLayout>
  )
}
