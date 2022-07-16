type TimePassedResponse = {
  value?: number;
  suffix?: 'h' | 'd' | 'm' | 'a';
  now?: boolean;
}

export const getTimePassed = (date: Date): TimePassedResponse => {
  const currentDate = new Date();

  const differenceInHours = Math.floor((currentDate.getTime() - date.getTime()) / (60 * 60 * 1000));

  if (differenceInHours === 0) {
    return {
      now: true,
    }
  }

  if (differenceInHours < 24) {
    return {
      value: differenceInHours,
      suffix: 'h'
    }
  }

  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInDays < 30) {
    return {
      value: differenceInDays,
      suffix: 'd'
    }
  }

  const differenceInMonths = Math.floor(differenceInDays / 30);

  if (differenceInMonths < 12) {
    return {
      value: differenceInMonths,
      suffix: 'm'
    }
  }

  const differenceInYears = Math.floor(differenceInMonths / 12);

  return {
    value: differenceInYears,
    suffix: 'a'
  }
}