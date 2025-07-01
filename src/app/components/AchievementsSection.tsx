"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useTranslation } from 'next-i18next';
import { useIsClient } from '../../utils/useIsClient';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const isClient = useIsClient();
  const { t } = useTranslation('common');

  const achievementsList = [
    {
      metric: t('projects_metric'),
      value: "50",
      postfix: "+",
    },
    {
      metric: t('years_metric'),
      value: "4",
      postfix: "+",
    },
    {
      metric: t('certifications_metric'),
      value: "30",
      postfix: "+",
    },
  ];

  if (!isClient) return null;

  return (
    <section className="wrapper xl:gap-16">
      <div className="adapter">
        <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
