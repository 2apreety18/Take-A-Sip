import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/food';
import { Flavor } from 'src/app/flavor';
import { SelectedFoodAttribute } from 'src/app/selectedFoodAttribute';
import { FoodService } from 'src/app/food.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit{

  imageUrl: string = '';
  food: Food | undefined;
  selectedAttributes: SelectedFoodAttribute = {
    flavor: undefined,
  };
  noteAreaForm = this.fb.group({
    noteArea: ''
  });
  

  constructor(private route: ActivatedRoute,private foodService: FoodService, private fb: FormBuilder) {}

  ngOnInit() {

    this.getFood();
    
    this.setSelectedAttributes(
      this.food?.flavors[0],
    );
    if (this.selectedAttributes?.flavor) {
      this.setImageUrl(this.selectedAttributes.flavor);
    }
  }

  getFood(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService
      .getFood(id)
      .subscribe((food) => (this.food = food)); 
  }

  // getflavorOptions(): string {
  //   return (
  //     this.food?.flavors?.map((flavor) => flavor.name).join('|') ?? 'yolii'
  //   );
  // }


  setImageUrl(flavor: Flavor): void {
    const flavorImageUrl = this.food?.imageUrls.find((url) =>
      url.includes(flavor.name)
    );
    if (!flavorImageUrl) {
      throw Error(`No flavor for ${flavor.name} value`); 
    }
    this.imageUrl = flavorImageUrl;
  }

  public updateSelectedFoodAttributes(flavor: Flavor | undefined) {
    this.setSelectedAttributes(flavor ?? {name: "none", color: "#DDD"});
    if (this.selectedAttributes.flavor) {
      this.setImageUrl(this.selectedAttributes.flavor);
    }
  }

  private setSelectedAttributes(
    flavor: Flavor | undefined,
  ) {
    this.selectedAttributes = {
      flavor: flavor,
    };
  }

  addToList(food: Food, selectedAttributes: SelectedFoodAttribute) {
    this.foodService.addToList(food, selectedAttributes);
    window.alert('This order has been added to the list!');
    this.noteAreaForm.reset();
  }
  

}
