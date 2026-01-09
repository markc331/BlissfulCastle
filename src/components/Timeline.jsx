import React, { useEffect, useRef } from 'react';
import './Timeline.css'
import WorkIcon from '../assets/work.png'
import SchoolIcon from '../assets/school.png'
import LeadershipIcon from '../assets/leadership.png'
import timelineElements from './timelineElements'

import { VerticalTimeline, VerticalTimelineElement } 
  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
    const containerRef = useRef(null);
    const iconStyles = {
      work: { backgroundColor: 'Plum' },
      school: { backgroundColor: 'MediumTurquoise' },
      leadership: { backgroundColor: 'PeachPuff' },
    };
    const iconMap = {
      work: {src:WorkIcon, alt: 'Work'},
      school: {src:SchoolIcon, alt: 'School'},
      leadership: {src:LeadershipIcon, alt: 'Leadership'}
    };

    useEffect(() => {
        const container = containerRef.current;
        const elements = container ? Array.from(container.querySelectorAll('.vertical-timeline-element')) : [];

        if (!container || elements.length === 0) {
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle('in-view', entry.isIntersecting);
                });
            },
            { root: null, threshold: 0.2 }
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

  return (
    <div className="wrapper">
        <div className="timeline" ref={containerRef}>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    const iconData = iconMap[element.icon] ?? iconMap.work;
                    const iconStyle = iconStyles[element.icon] ?? iconStyles.work;

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName='date'
                            iconStyle={iconStyle}
                            icon={<img src={iconData.src} alt={iconData.alt} style={{ width: '100%', height: '100%' }} />}>
                                <h3 className="element_title">{element.title}</h3>
                                <h5>{element.company}</h5>
                                <h6 className="element_subtitle">{element.location}</h6>
                                <p id="description">{element.description}</p>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    </div>
  );
}

export default Timeline
