'use client';
import Input from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Building2, MapPin, Phone, Mail, Globe } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BusinessIntakeForm } from '@/lib/types';

interface Props {
  register: UseFormRegister<BusinessIntakeForm>;
  errors: FieldErrors<BusinessIntakeForm>;
}

export default function Step1Business({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          <Building2 className="w-6 h-6 text-gold-400" />
          Business Information
        </h2>
        <p className="text-zinc-400 mt-1 text-sm">
          Tell us about your business. The more detail you provide, the more strategic and accurate your blueprint will be.
        </p>
      </div>

      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Input
              label="Business Name"
              placeholder="e.g. Elite Event Draping Co."
              required
              error={errors.businessName?.message}
              {...register('businessName', { required: 'Business name is required' })}
            />
          </div>
          <Input
            label="Industry"
            placeholder="e.g. Event Decoration, Luxury Auto Detailing"
            required
            error={errors.industry?.message}
            {...register('industry', { required: 'Industry is required' })}
          />
          <div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-zinc-500 mt-7 flex-shrink-0" />
              <div className="flex-1">
                <Input
                  label="Primary Location"
                  placeholder="e.g. Atlanta, GA"
                  required
                  error={errors.location?.message}
                  {...register('location', { required: 'Location is required' })}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <Input
              label="Service Area"
              placeholder="e.g. Atlanta Metro Area, Gwinnett County, DeKalb County"
              hint="List all cities, counties, or regions you serve"
              {...register('serviceArea')}
            />
          </div>
          <div className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-zinc-500 mt-7 flex-shrink-0" />
            <div className="flex-1">
              <Input
                label="Business Phone"
                type="tel"
                placeholder="(404) 555-0100"
                {...register('businessPhone')}
              />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-zinc-500 mt-7 flex-shrink-0" />
            <div className="flex-1">
              <Input
                label="Business Email"
                type="email"
                placeholder="info@yourbusiness.com"
                {...register('businessEmail')}
              />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Globe className="w-4 h-4 text-zinc-500 mt-7 flex-shrink-0" />
            <div className="flex-1">
              <Input
                label="Current Website (optional)"
                type="url"
                placeholder="https://yourbusiness.com"
                {...register('currentWebsiteUrl')}
              />
            </div>
          </div>
          <Input
            label="Competitors (optional)"
            placeholder="e.g. LuxDrape Co., Premier Events ATL"
            hint="Names or URLs of main competitors"
            {...register('competitors')}
          />
          <div className="md:col-span-2">
            <Input
              label="Social Media Links (optional)"
              placeholder="e.g. instagram.com/yourbusiness, facebook.com/yourbusiness"
              {...register('socialLinks')}
            />
          </div>
          <div className="md:col-span-2">
            <Input
              label="Google Business Profile URL (optional)"
              placeholder="https://g.page/yourbusiness"
              {...register('googleBusinessProfile')}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
