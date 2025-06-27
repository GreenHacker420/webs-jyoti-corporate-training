"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TrainingModuleModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TrainingModuleModal({ isOpen, onClose }: TrainingModuleModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">Training Module Details</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 p-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Comprehensive Training Programs</h3>
            <p className="text-gray-600 mb-4">
              Our training modules are designed to provide comprehensive knowledge and practical skills in data
              analytics, business intelligence, and related technologies. Each module combines theoretical concepts with
              hands-on practical exercises to ensure maximum learning outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Data Analytics Fundamentals</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Statistical Analysis and Methods</li>
                <li>• Data Collection and Cleaning</li>
                <li>• Data Visualization Techniques</li>
                <li>• Reporting and Presentation</li>
                <li>• Industry Case Studies</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Advanced Excel Mastery</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Advanced Functions and Formulas</li>
                <li>• Pivot Tables and Charts</li>
                <li>• Macros and VBA Programming</li>
                <li>• Data Analysis Tools</li>
                <li>• Dashboard Creation</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">Power BI Professional</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data Modeling and Relationships</li>
                <li>• DAX Functions and Calculations</li>
                <li>• Interactive Visualizations</li>
                <li>• Report and Dashboard Design</li>
                <li>• Power Query and ETL</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">MIS Reporting Excellence</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Report Design and Structure</li>
                <li>• KPI Development and Tracking</li>
                <li>• Automated Reporting Systems</li>
                <li>• Data Integration Techniques</li>
                <li>• Executive Dashboard Creation</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">Training Methodology</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <strong>Theoretical Foundation:</strong>
                <p>Comprehensive coverage of concepts and principles</p>
              </div>
              <div>
                <strong>Practical Application:</strong>
                <p>Hands-on exercises with real-world datasets</p>
              </div>
              <div>
                <strong>Project-Based Learning:</strong>
                <p>Complete projects from start to finish</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h4 className="font-semibold mb-3">What You'll Gain</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-1">
                <li>✓ Industry-recognized certification</li>
                <li>✓ Practical skills and experience</li>
                <li>✓ Portfolio of completed projects</li>
              </ul>
              <ul className="space-y-1">
                <li>✓ Career advancement opportunities</li>
                <li>✓ Networking with industry professionals</li>
                <li>✓ Ongoing support and mentorship</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
