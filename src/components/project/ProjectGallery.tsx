import { motion } from 'motion/react';
import { memo } from 'react';

interface ProjectGalleryProps {
  gallery: string[];
  title: string;
}

export const ProjectGallery = memo(function ProjectGallery({ gallery, title }: ProjectGalleryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20"
    >
      <h2
        className="text-3xl mb-8"
        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800 }}
      >
        Galeria do Projeto
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative aspect-4/3 rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={image}
              alt={`${title} - ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});