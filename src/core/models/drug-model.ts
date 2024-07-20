class Drug {
  public name: string = '';
  public action: string = '';
  public dosage: string = '';
  public time_of_the_day: Time_of_the_day = Time_of_the_day.niezależnie;
  public meal: Meal = Meal.niezależnie;
  public indications: string = '';
  public therapy_period: string = '';
  public comments: string = '';
  public contraindications: string = '';
  public pregnancy: Pregnancy = Pregnancy.brak_badan;
  public effect: Effects = Effects.pozytywny;
}
