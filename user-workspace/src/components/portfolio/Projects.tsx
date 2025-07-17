'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise CMS Platform',
      description: 'A comprehensive content management system built for large-scale organizations with multi-user roles, workflow management, and real-time collaboration features.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      features: ['Multi-tenant architecture', 'Real-time collaboration', 'Advanced user permissions', 'Content versioning'],
      status: 'Production'
    },
    {
      title: 'Real-Time Examination Portal',
      description: 'Secure online examination platform with live proctoring, anti-cheating mechanisms, and instant result processing for educational institutions.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'WebRTC', 'Redis'],
      features: ['Live proctoring', 'Auto-save functionality', 'Plagiarism detection', 'Analytics dashboard'],
      status: 'Production'
    },
    {
      title: 'E-Commerce Management System',
      description: 'Full-featured e-commerce platform with inventory management, payment processing, and comprehensive analytics for small to medium businesses.',
      technologies: ['React', 'Node.js', 'Express', 'MySQL', 'Stripe API'],
      features: ['Inventory tracking', 'Payment integration', 'Order management', 'Sales analytics'],
      status: 'Production'
    },
    {
      title: 'Healthcare Management Portal',
      description: 'Patient management system for healthcare providers with appointment scheduling, medical records, and telemedicine capabilities.',
      technologies: ['Angular', 'Java Spring', 'PostgreSQL', 'AWS S3'],
      features: ['Patient records', 'Appointment system', 'Telemedicine', 'HIPAA compliant'],
      status: 'Production'
    },
    {
      title: 'Financial Dashboard Application',
      description: 'Real-time financial data visualization platform with advanced charting, portfolio tracking, and automated reporting features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'WebSocket'],
      features: ['Real-time data', 'Interactive charts', 'Portfolio tracking', 'Automated reports'],
      status: 'Production'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, student progress tracking, interactive assessments, and certification management.',
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'FFmpeg'],
      features: ['Course builder', 'Progress tracking', 'Video streaming', 'Certificate generation'],
      status: 'Production'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work spanning various industries and technologies, 
            demonstrating expertise in full-stack development and system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  >
                    {project.status}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  )
}
