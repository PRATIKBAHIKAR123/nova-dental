'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    content: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name *"
              className="w-full bg-white border-gray-300 focus:border-secondary focus:ring-secondary"
            />
          </div>
          
          <div>
            <Input
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address *"
              className="w-full bg-white border-gray-300 focus:border-secondary focus:ring-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full bg-white border-gray-300 focus:border-secondary focus:ring-secondary"
            />
          </div>
          
          <div>
            <Input
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject *"
              className="w-full bg-white border-gray-300 focus:border-secondary focus:ring-secondary"
            />
          </div>
        </div>

        <div>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Content"
            className="w-full min-h-[120px] resize-none bg-white border-gray-300 focus:border-secondary focus:ring-secondary"
          />
        </div>

        <button 
          type="submit" 
          className="text-secondary font-medium hover:text-secondary/80 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
} 