'use client';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { Card } from '@/components/ui/Card';
import { Package, Star, MapPin } from 'lucide-react';
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { BusinessIntakeForm } from '@/lib/types';

interface Props {
  register: UseFormRegister<BusinessIntakeForm>;
  errors: FieldErrors<BusinessIntakeForm>;
}

export default function Step3Offers({ register, errors }: Props) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          <Package className="w-6 h-6 text-gold-400" />
          Offers & Services
        </h2>
        <p className="text-zinc-400 mt-1 text-sm">
          Describe what you sell, how you serve, and where you operate.
        </p>
      </div>

      <Card>
        <div className="space-y-5">
          <div className="flex gap-3">
            <Star className="w-5 h-5 text-gold-400 mt-7 flex-shrink-0" />
            <div className="flex-1">
              <Textarea
                label="Main Offer (your #1 service)"
                placeholder="e.g. Full venue draping and floral installation for weddings — we transform your venue from ordinary to extraordinary using premium silks, LED lighting, and custom floral arches"
                rows={3}
                required
                error={errors.mainOffer?.message}
                {...register('mainOffer', { required: 'Main offer is required' })}
              />
            </div>
          </div>

          <Textarea
            label="Secondary Offers"
            placeholder="e.g. Chair covers & sashes, Centerpiece rentals, Day-of coordination, Custom backdrops"
            rows={3}
            hint="List all other services or products you offer"
            {...register('secondaryOffers')}
          />

          <Textarea
            label="All Services"
            placeholder="Full list of every service, package, or product"
            rows={4}
            hint="This generates your service pages and SEO structure"
            {...register('services')}
          />

          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-zinc-500 mt-7 flex-shrink-0" />
            <div className="flex-1">
              <Textarea
                label="All Locations Served"
                placeholder="e.g. Atlanta GA, Marietta GA, Alpharetta GA, Buckhead, Sandy Springs, Decatur..."
                rows={3}
                hint="Every city, town, neighborhood, or county — this powers your local SEO pages"
                {...register('locationsServed')}
              />
            </div>
          </div>

          <Textarea
            label="Testimonials (optional)"
            placeholder="Paste 2-3 of your best client testimonials here"
            rows={4}
            hint="The AI will weave these into your conversion strategy"
            {...register('testimonials')}
          />

          <Input
            label="Reviews Summary (optional)"
            placeholder="e.g. 4.9 stars, 127 Google reviews"
            {...register('reviews')}
          />
        </div>
      </Card>
    </div>
  );
}
