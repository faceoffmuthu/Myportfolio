'use client';

import React, { forwardRef } from 'react';
import { motion } from 'motion/react';

import { cn } from '../../lib/utils';

const ContainerScroll = forwardRef((props, ref) => {
  const { children, className, style, ...rest } = props;

  return (
    <div
      ref={ref}
      className={cn('relative w-full', className)}
      style={{ perspective: '1000px', ...style }}
      {...rest}
    >
      {children}
    </div>
  );
});
ContainerScroll.displayName = 'ContainerScroll';

const CardSticky = forwardRef((props, ref) => {
  const {
    index,
    incrementY = 10,
    incrementZ = 10,
    children,
    className,
    style,
    ...rest
  } = props;

  const y = index * incrementY;
  const z = index * incrementZ;

  return (
    <motion.div
      ref={ref}
      layout='position'
      style={{
        top: y,
        zIndex: z,
        backfaceVisibility: 'hidden',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style,
      }}
      className={cn('sticky', className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
CardSticky.displayName = 'CardSticky';

export { ContainerScroll, CardSticky };
