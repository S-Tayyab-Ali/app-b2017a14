"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, MapPin, Heart } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-slate-900 pt-20 pb-32 lg:pt-32 lg:pb-40">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90" />
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{ 
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
              animate={{ 
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                Designed for Orange County Families
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight">
                Make Home Safer for <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Aging in Place
                </span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
                Get a personalized home safety plan and connect with trusted local resources in just 5 minutes. No cost, no account required.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/assessment">
                  <Button size="lg" className="text-lg px-10 py-6 shadow-xl shadow-blue-900/20">
                    Start Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="secondary" size="lg" className="text-lg px-10 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative bottom shape */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
        </section>

        {/* Value Props Section */}
        <section className="py-24 bg-white relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Use Aging at Home Hub?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We eliminate the overwhelm of making a home safe for seniors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Personalized Safety Plan",
                  desc: "Answer simple questions to get a prioritized list of safety improvements tailored to your specific home and needs."
                },
                {
                  icon: MapPin,
                  title: "Local OC Resources",
                  desc: "Connect directly with verified Orange County contractors, non-profits, and funding programs."
                },
                {
                  icon: Heart,
                  title: "Peace of Mind",
                  desc: "Feel confident knowing you've addressed the most critical safety risks for your loved ones."
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300 border-gray-100">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                      <feature.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Simple Steps to a Safer Home
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  You don't need to be an expert to make the right decisions. We guide you through the process step-by-step.
                </p>
                
                <div className="space-y-8">
                  {[
                    { step: "01", title: "Take the Quiz", desc: "Answer 7 simple questions about the home and mobility needs." },
                    { step: "02", title: "Get Recommendations", desc: "Receive a customized list of DIY and professional improvements." },
                    { step: "03", title: "Take Action", desc: "Connect with local pros or use our guides to make changes." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-blue-600 shadow-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10">
                  <Link href="/assessment">
                    <Button size="lg">Start Your Assessment</Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-3xl transform rotate-3 opacity-10"></div>
                <Card className="relative p-8 border-0 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                      <div className="font-bold text-lg text-gray-900">Your Safety Report</div>
                      <Badge variant="success">High Priority</Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Install Grab Bars</h5>
                          <p className="text-sm text-gray-500 mt-1">Bathroom • Low Cost</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Improve Lighting</h5>
                          <p className="text-sm text-gray-500 mt-1">Hallways • DIY</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                          <Shield size={20} />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900">Remove Throw Rugs</h5>
                          <p className="text-sm text-gray-500 mt-1">General • Free</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="w-full bg-gray-100 rounded-lg p-4 text-center text-sm text-gray-500">
                        + 5 more recommendations
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 pattern-grid-lg"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                Ready to create a safer home?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
                Join hundreds of Orange County families who have used our free tool to protect their loved ones.
              </p>
              
              <Link href="/assessment" className="relative z-10">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg border-0">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

function Badge({ children, variant }: { children: React.ReactNode, variant: string }) {
  const colors = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[variant as keyof typeof colors]}`}>
      {children}
    </span>
  );
}

