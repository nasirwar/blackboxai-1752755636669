import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'Java', 'Angular', 'Node.js', 'Express.js',
    'HTML5', 'CSS3', 'React', 'MongoDB', 'PostgreSQL', 'MySQL',
    'Git', 'Docker', 'AWS', 'REST APIs', 'GraphQL', 'Microservices'
  ]

  const experiences = [
    {
      title: 'Large-Scale Application UI Design',
      description: 'Designed and implemented user interfaces for enterprise-level applications, focusing on scalability and user experience.'
    },
    {
      title: 'Content Management Systems',
      description: 'Built numerous CMS platforms from scratch, enabling clients to manage their content efficiently with custom workflows.'
    },
    {
      title: 'Real-Time Examination Portals',
      description: 'Developed secure, real-time examination systems with live monitoring, anti-cheating measures, and instant result processing.'
    },
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development using modern technologies, from database design to responsive frontend implementation.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate developer with extensive experience in building scalable web applications 
            and delivering exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Over the years, I have evolved into a versatile full-stack developer with a strong foundation 
                in both frontend and backend technologies. My expertise spans across multiple programming 
                languages and frameworks, with a particular focus on JavaScript ecosystem and Java-based solutions.
              </p>
              <p>
                I have successfully delivered projects ranging from complex enterprise applications to 
                real-time systems that serve thousands of users simultaneously. My approach combines 
                technical excellence with user-centered design principles.
              </p>
              <p>
                What sets me apart is my ability to understand business requirements and translate them 
                into robust, scalable technical solutions. I believe in writing clean, maintainable code 
                and following industry best practices.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Key Experiences</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{exp.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
