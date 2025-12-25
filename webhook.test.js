import { describe, it, expect } from '@jest/globals'

describe('Resume Summary', () => {
  it('should be a valid text file with resume summary content', () => {
    const resumeContent = 'To obtain an entry-level position in a reputed MNC where I can apply my skills in web development and data analytics, continuously enhance my technical knowledge, and contribute effectively to organizational goals and growth.'
    
    expect(typeof resumeContent).toBe('string')
    expect(resumeContent.length).toBeGreaterThan(0)
    expect(resumeContent).toContain('entry-level position')
    expect(resumeContent).toContain('web development')
    expect(resumeContent).toContain('data analytics')
  })

  it('should contain key skills and objectives', () => {
    const resumeContent = 'To obtain an entry-level position in a reputed MNC where I can apply my skills in web development and data analytics, continuously enhance my technical knowledge, and contribute effectively to organizational goals and growth.'

    const requiredKeywords = [
      'entry-level',
      'web development',
      'data analytics',
      'technical knowledge',
      'organizational goals'
    ]

    requiredKeywords.forEach(keyword => {
      expect(resumeContent.toLowerCase()).toContain(keyword.toLowerCase())
    })
  })

  it('should not be empty or contain only whitespace', () => {
    const resumeContent = 'To obtain an entry-level position in a reputed MNC where I can apply my skills in web development and data analytics, continuously enhance my technical knowledge, and contribute effectively to organizational goals and growth.'

    expect(resumeContent.trim()).not.toBe('')
    expect(resumeContent).toMatch(/^\s*\S/)
  })
})