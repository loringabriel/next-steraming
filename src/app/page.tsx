import { Suspense } from 'react';

const InstantData = () => {
  return <span className="text-green-400">Instant data </span>;
};

const FastPromise = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast Promise');
    }, 1000);
  });
  return <span className="text-green-400">Fast Promise (1 sec)</span>;
};

const SlowPromise = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow Promise');
    }, 2500);
  });
  return <span className="text-green-400">Slow Promise (2.5 sec)</span>;
};

const SuperSlowPromise = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Super Slow Promise');
    }, 4000);
  });
  return <span className="text-green-400">Super Slow Promise (4 sec)</span>;
};

export default function Home() {
  return (
    <div className="h-screen flex justify-center min-w-full">
      <header className="flex flex-col items-center gap-5 min-w-full">
        <h1 className="leading p-5 text-left w-full text-xl font-semibold text-gray-800 dark:text-gray-100 flex flex-col gap-5 ">
          <InstantData />
          <div>
            <Suspense fallback={'Loading fast promise (1 sec)'}>
              <FastPromise />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={'Loading slow promise (2.5 sec)'}>
              <SlowPromise />
            </Suspense>
          </div>
          <div>
            <Suspense fallback={'Loading super slow promise (4 sec)'}>
              <SuperSlowPromise />
            </Suspense>
          </div>
        </h1>
      </header>
    </div>
  );
}
