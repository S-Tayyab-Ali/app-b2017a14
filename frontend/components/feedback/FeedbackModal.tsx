"use client";

import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { X, ThumbsUp, ThumbsDown } from 'lucide-react';
import Button from '../ui/Button';
import { useStore } from '@/context/StoreContext';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const { saveFeedback } = useStore();
  const [step, setStep] = useState(1);
  const [wasHelpful, setWasHelpful] = useState<boolean | null>(null);
  const [knowWhereToStart, setKnowWhereToStart] = useState<'Yes' | 'No' | 'Somewhat' | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (wasHelpful !== null && knowWhereToStart !== null) {
      saveFeedback({
        planId: 'current', // In real app, use actual ID
        wasHelpful,
        knowWhereToStart,
        comment
      });
      setStep(3); // Success state
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    {step === 3 ? 'Thank You!' : 'Quick Feedback'}
                  </Dialog.Title>
                  <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                    <X size={20} />
                  </button>
                </div>

                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-gray-600">Was this safety report helpful to you?</p>
                    <div className="flex gap-4 justify-center">
                      <button
                        onClick={() => { setWasHelpful(true); setStep(2); }}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-100 hover:border-green-500 hover:bg-green-50 transition-all w-32"
                      >
                        <ThumbsUp className="text-green-600" size={32} />
                        <span className="font-medium text-gray-900">Yes</span>
                      </button>
                      <button
                        onClick={() => { setWasHelpful(false); setStep(2); }}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-gray-100 hover:border-red-500 hover:bg-red-50 transition-all w-32"
                      >
                        <ThumbsDown className="text-red-600" size={32} />
                        <span className="font-medium text-gray-900">No</span>
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-600 mb-3">Do you feel you know where to start now?</p>
                      <div className="grid grid-cols-3 gap-2">
                        {['Yes', 'Somewhat', 'No'].map((option) => (
                          <button
                            key={option}
                            onClick={() => setKnowWhereToStart(option as any)}
                            className={`py-2 px-4 rounded-lg border-2 font-medium transition-all ${
                              knowWhereToStart === option
                                ? 'border-blue-600 bg-blue-50 text-blue-700'
                                : 'border-gray-200 hover:border-blue-300 text-gray-700'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Any comments? (Optional)
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        rows={3}
                        placeholder="Tell us what we could improve..."
                      />
                    </div>

                    <Button 
                      onClick={handleSubmit} 
                      fullWidth 
                      disabled={!knowWhereToStart}
                    >
                      Submit Feedback
                    </Button>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                      <CheckCircle size={32} />
                    </div>
                    <p className="text-gray-600">
                      Your feedback helps us improve the experience for other families.
                    </p>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

function CheckCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

export default FeedbackModal;

