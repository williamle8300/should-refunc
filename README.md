iterate over a collection and
execute any function
that has the signature: (item, callback)

shouldRefunc is designed specifically for
running jobs that can silently fail
the primary usecases
for this are background cron jobs

My use-case
shouldRefunc(true, refreshRss, rssUrls);
