'use client';

import CountUp from 'react-countup';

const Counter = () => {
	return (
		<div className="flex flex-col md:flex-row justify-center gap-20 py-10 bg-gray-50 text-center rounded-xl">
			<div>
				<p className="text-5xl font-light text-teal-950">
					<CountUp end={10} duration={3} />
				</p>
				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">AÑOS DE ACCIÓN</p>
			</div>
			<div>
				<p className="text-5xl font-light text-teal-950">
					<CountUp end={90} duration={2.5} />
				</p>
				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS ADOPTADOS</p>
			</div>
			<div>
				<p className="text-5xl font-light text-teal-950">
					<CountUp end={3} duration={5} />
				</p>
				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS ADOPTADOS EN 2025</p>
			</div>
			<div>
				<p className="text-5xl font-light text-teal-950">
					<CountUp end={18} duration={4} />
				</p>
				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">DISCAS POR ADOPTAR</p>
			</div>
			<div>
				<p className="text-5xl font-light text-teal-950">
					<CountUp end={40} duration={2.5} />
				</p>
				<p className="text-sm font-semibold text-gray-600 tracking-wide mt-2">VOLUNTARIOS</p>
			</div>
		</div>
	);
};

export default Counter;
